/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, Fragment, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStyleClass } from '$styleguide/styleContext';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useProductDetails } from '$styleguide/components/ProductDetails/context';

export const ProductSpecifications: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();

  const data = useProductDetails();
  const { styles } = useStyleClass(['title', 'separator', 'values', 'col', 'name'], subSchema.blockClass);

  const specificationsData = useMemo(
    () => data?.product?.specifications || [],
    [data]
  );

  const renderComponent = useCallback(() => {
    if (!specificationsData?.length) return null;
    return (
      <>
        <Fragment>
          <Text style={[defaultStyles.title, styles.title]}>
            {subSchema.tableTitle}
          </Text>
          {specificationsData.map((specification, index) => (
            <View key={index}>
              <View style={[defaultStyles.col, styles.col]}>
                <Text style={[defaultStyles.name, styles.name]}>
                  {specification.name}
                </Text>
                <Text style={[defaultStyles.values, styles.values]}>
                  {specification.values.length && specification.values[0]}
                </Text>
              </View>
              <View style={[defaultStyles.separator, styles.separator]} />
            </View>
          ))}
        </Fragment>
      </>
    );
  }, [specificationsData, styles.col, styles.name, styles.separator, styles.title, styles.values, subSchema.tableTitle]);

  return (
    <View style={[defaultStyles.table, styles.table]}>{renderComponent()}</View>
  );
};

const defaultStyles = StyleSheet.create({
  table: {
    display: 'flex',
  },
  name: {
    fontWeight: 'bold',
    color: '#878787',
  },
  values: {
    color: '#878787',
  },

  col: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderWidth: 0.8,
    borderStyle: 'dashed',
    borderColor: '#cccccc',
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
  },
});
