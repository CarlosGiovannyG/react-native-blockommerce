import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useTheme } from '../../theme';
import { Condition, Conditions, Verb } from './types/types';
import { useCart } from '$commerce/cart';
import useProduct from '$commerce/product/use-product';
import { useRoute } from '@react-navigation/native';

const isProductIsAddedValidation = (
  condition: Condition,
  isAddedToTheCart: string
) => condition.object === isAddedToTheCart;
const isNotProductIsAddedValidation = (
  condition: Condition,
  isAddedToTheCart: string
) => condition.object !== isAddedToTheCart;

const isProductIsNoDiscountValidation = (
  condition: Condition,
  isNoDiscount: string
) => condition.object === isNoDiscount;
const isNotProductIsNoDiscountValidation = (
  condition: Condition,
  isNoDiscount: string
) => condition.object !== isNoDiscount;

const measurementUnitValidation = (
  condition: Condition,
  measurementUnit: string
) => condition.object === measurementUnit;
const isNotPricePerUnitValidation = (
  condition: Condition,
  measurementUnit: string
) => condition.object !== measurementUnit;

const ProductmeasurementUnit = {
  is: measurementUnitValidation,
  isNot: isNotPricePerUnitValidation,
};

const ProductIsNoDiscountVerbs = {
  is: isProductIsNoDiscountValidation,
  isNot: isNotProductIsNoDiscountValidation,
};

const ProductIsAddedVerbs = {
  is: isProductIsAddedValidation,
  isNot: isNotProductIsAddedValidation,
};

const IfConditionValidate = (
  conditions: Conditions,
  value: { [key: string]: any }
) => {
  const result: boolean[] = [];
  if (conditions.If) {
    conditions.If.forEach((condition) => {
      if (condition.subject === 'isAddedToTheCart') {
        if (condition.verb == Verb.is) {
          const tValidation = ProductIsAddedVerbs.is(
            condition,
            value[condition.subject]
          );
          result.push(tValidation);
        } else if (condition.verb == Verb.isNot) {
          const tValidation = ProductIsAddedVerbs.isNot(
            condition,
            value[condition.subject]
          );
          result.push(tValidation);
        } else {
          result.push(false);
        }
      } else if (condition.subject === 'isNoDiscount') {
        if (condition.verb == Verb.is) {
          const tValidation = ProductIsNoDiscountVerbs.is(
            condition,
            value[condition.subject]
          );
          result.push(tValidation);
        } else if (condition.verb == Verb.isNot) {
          const tValidation = ProductIsNoDiscountVerbs.isNot(
            condition,
            value[condition.subject]
          );
          result.push(tValidation);
        } else {
          result.push(false);
        }
      } else if (condition.subject === 'measurementUnit') {
        if (condition.verb == Verb.is) {
          const tValidation = ProductmeasurementUnit.is(
            condition,
            value[condition.subject]
          );
          result.push(tValidation);
        } else if (condition.verb == Verb.isNot) {
          const tValidation = ProductmeasurementUnit.isNot(
            condition,
            value[condition.subject]
          );
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
  value: { [key: string]: any }
) => {
  if (conditions.ElseifContainer) {
    return conditions.ElseifContainer.map((condition) => {
      const result: boolean[] = [];
      condition.forEach((condition) => {
        if (condition.subject === 'product') {
          if (condition.verb == Verb.is) {
            const tValidation = ProductIsAddedVerbs.is(
              condition,
              value[condition.subject]
            );
            result.push(tValidation);
          } else if (condition.verb == Verb.isNot) {
            const tValidation = ProductIsAddedVerbs.isNot(
              condition,
              value[condition.subject]
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

export const ConditionProductDetailsComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const route = useRoute();
  const subSchema = inputObject.getObject();
  const { data: product, isLoading } = useProduct({
    // @ts-ignore
    slug: route.params?.productId,
  });

  const [isAddedToTheCart, setIsAddedToTheCart] = useState(false);
  const [isNoDiscount, setIsNoDiscount] = useState(false);
  const [measurementUnit, setIsMeasurementUnit] = useState(false);

  const { data } = useCart();

  const getCartItemById = useCallback(
    (id: string) => {
      const items = data?.cart?.items;
      const item = items?.find(
        (predicate: { id: string }) => predicate.id === id
      );
      return item;
    },
    [data, product?.productId]
  );

  const getAndSetQuantityNumberHandler = useCallback(() => {
    const item = getCartItemById(product?.productId);
    if (item && item?.quantity) setIsAddedToTheCart(true);
    else setIsAddedToTheCart(false);
  }, [getCartItemById, product?.productId]);

  const getAndSetPriceDiscountNumberHandler = useCallback(() => {
    if (product?.discount > 0) setIsNoDiscount(true);
    else setIsNoDiscount(false);
  }, [product?.discount]);

  const getMeasurementUnitHandler = useCallback(() => {
    setIsMeasurementUnit(product?.measurementUnit);
  }, [product?.measurementUnit]);

  useEffect(() => {
    getMeasurementUnitHandler();
  }, [product, product?.measurementUnit]);

  useEffect(() => {
    getAndSetPriceDiscountNumberHandler();
  }, [product, product?.discount]);

  useEffect(() => {
    getAndSetQuantityNumberHandler();
  }, [
    data,
    getAndSetQuantityNumberHandler,
    getCartItemById,
    product?.productId,
  ]);

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const childrens = useChildrenBlocks(subSchema.blocks);

  const { currentTheme } = useTheme();

  const conditions = useMemo(
    () => subSchema.conditions as Conditions,
    [subSchema.conditions]
  );

  const Validate = useCallback(() => {
    const IfCondition = IfConditionValidate(conditions, {
      isAddedToTheCart,
      isNoDiscount,
      measurementUnit,
    }).filter((condition) => condition === false);
    const ElseIfCondition = ElseIfConditionValidate(conditions, {
      isAddedToTheCart,
      isNoDiscount,
      measurementUnit,
    });

    const r = ElseIfCondition.filter((elifcondition) =>
      elifcondition.find((elifV) => elifV === true)
    );

    if (!IfCondition.length) {
      return true;
    } else if (r.length) {
      return true;
    }
    return false;
  }, [
    conditions,
    currentTheme,
    isAddedToTheCart,
    isNoDiscount,
    measurementUnit,
  ]);

  const isValid = useMemo(() => Validate(), [Validate]);

  return <View style={styles.container}>{isValid && childrens}</View>;
};
