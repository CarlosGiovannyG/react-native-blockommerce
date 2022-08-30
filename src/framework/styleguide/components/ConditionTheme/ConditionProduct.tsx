import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useTheme } from '../../theme';
import { Condition, Conditions, Verb } from './types/types';
import { useShelfContext } from '../ProductSummary/Shelf/context';
import { useCart } from '$commerce/cart';



const isProductIdValidation = (condition: Condition, isAddedToTheCart: string) =>
    condition.object === isAddedToTheCart;
const isNotProductIdValidation = (condition: Condition, isAddedToTheCart: string) =>
    condition.object !== isAddedToTheCart;

const ProductIdVerbs = {
    is: isProductIdValidation,
    isNot: isNotProductIdValidation,
};

const IfConditionValidate = (conditions: Conditions, isAddedToTheCart: string) => {
    const result: boolean[] = [];
    if (conditions.If) {
        conditions.If.forEach((condition) => {
            if (condition.subject === 'isAddedToTheCart') {
                if (condition.verb == Verb.is) {
                    const tValidation = ProductIdVerbs.is(condition, isAddedToTheCart);
                    result.push(tValidation);
                } else if (condition.verb == Verb.isNot) {
                    const tValidation = ProductIdVerbs.isNot(condition, isAddedToTheCart);
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
    isAddedToTheCart: string
) => {
    if (conditions.ElseifContainer) {
        return conditions.ElseifContainer.map((condition) => {
            const result: boolean[] = [];
            condition.forEach((condition) => {
                if (condition.subject === 'product') {
                    if (condition.verb == Verb.is) {
                        const tValidation = ProductIdVerbs.is(condition, isAddedToTheCart);
                        result.push(tValidation);
                    } else if (condition.verb == Verb.isNot) {
                        const tValidation = ProductIdVerbs.isNot(condition, isAddedToTheCart);
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

export const ConditionProductComponent: FC<{
    inputObject: BasicInputReturnType;
}> = (props) => {
    const { inputObject } = props;

    const subSchema = inputObject.getObject();
    const { data: product } = useShelfContext();
    const [isAddedToTheCart, setIsAddedToTheCart] = useState(false)
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
        if (item && item?.quantity) setIsAddedToTheCart(true)
        else  setIsAddedToTheCart(false)
    }, [getCartItemById, product?.productId]);

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
        const IfCondition = IfConditionValidate(conditions, isAddedToTheCart).filter(
            (condition) => condition === false
        );
        const ElseIfCondition = ElseIfConditionValidate(conditions, isAddedToTheCart);

        const r = ElseIfCondition.filter((elifcondition) =>
            elifcondition.find((elifV) => elifV === true)
        );

        if (!IfCondition.length) {
            return true;
        } else if (r.length) {
            return true;
        }
        return false;
    }, [conditions, currentTheme,isAddedToTheCart]);

    const isValid = useMemo(() => Validate(), [Validate]);

    return <View style={styles.container}>{isValid && childrens}</View>;
};
