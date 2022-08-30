import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useTheme } from '../../theme';
import { Condition, Conditions, Verb } from './types/types';
import { useShelfContext } from '../ProductSummary/Shelf/context';
import { useCart } from '$commerce/cart';

const isCartProductsValidation = (
  condition: Condition,
  hasItemInCart: string
) => condition.object === hasItemInCart;
const isNotCartProductsIdValidation = (
  condition: Condition,
  hasItemInCart: string
) => condition.object !== hasItemInCart;

const CartProductVerbs = {
  is: isCartProductsValidation,
  isNot: isNotCartProductsIdValidation,
};

const IfConditionValidate = (conditions: Conditions, hasItemInCart: string) => {
  const result: boolean[] = [];
  if (conditions.If) {
    conditions.If.forEach((condition) => {
      if (condition.subject === 'hasItemInCart') {
        if (condition.verb == Verb.is) {
          const tValidation = CartProductVerbs.is(condition, hasItemInCart);
          result.push(tValidation);
        } else if (condition.verb == Verb.isNot) {
          const tValidation = CartProductVerbs.isNot(condition, hasItemInCart);
          result.push(tValidation);
        } else {
          result.push(false);
        }
      }
    });
  }
  return result;
};

const ElseIfConditionValidate = (
  conditions: Conditions,
  hasItemInCart: string
) => {
  if (conditions.ElseifContainer) {
    return conditions.ElseifContainer.map((condition) => {
      const result: boolean[] = [];
      condition.forEach((condition) => {
        if (condition.subject === 'product') {
          if (condition.verb == Verb.is) {
            const tValidation = CartProductVerbs.is(condition, hasItemInCart);
            result.push(tValidation);
          } else if (condition.verb == Verb.isNot) {
            const tValidation = CartProductVerbs.isNot(
              condition,
              hasItemInCart
            );
            result.push(tValidation);
          } else {
            result.push(false);
          }
        }
      });
      return result;
    }).filter((fc) => fc.length);
  }
  return [];
};

export const ConditionCartComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { data: product } = useShelfContext();
  const [hasItemInCart, setHasItemInCart] = useState(false);
  const { data } = useCart();

  const getItemsInCartHandler = useCallback(() => {
    if (data?.cart?.items.length <= 0) setHasItemInCart(false);
    else setHasItemInCart(true);
  }, [data?.cart?.items]);

  useEffect(() => {
    getItemsInCartHandler();
  }, [data, getItemsInCartHandler, data?.cart?.items]);

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const childrens = useChildrenBlocks(subSchema.blocks);

  const { currentTheme } = useTheme();

  const conditions = useMemo(
    () => subSchema.conditions as Conditions,
    [subSchema.conditions]
  );

  const Validate = useCallback(() => {
    const IfCondition = IfConditionValidate(conditions, hasItemInCart).filter(
      (condition) => condition === false
    );
    const ElseIfCondition = ElseIfConditionValidate(conditions, hasItemInCart);

    const r = ElseIfCondition.filter((elifcondition) =>
      elifcondition.find((elifV) => elifV === true)
    );

    if (!IfCondition.length) {
      return true;
    } else if (r.length) {
      return true;
    }
    return false;
  }, [conditions, currentTheme, hasItemInCart]);

  const isValid = useMemo(() => Validate(), [Validate]);

  return <View style={styles.container}>{isValid && childrens}</View>;
};
