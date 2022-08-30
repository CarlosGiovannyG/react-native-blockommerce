/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useCallback, useState } from 'react';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import { Text, View, ViewStyle } from 'react-native';
import { useAccordionFilterItem } from '../AccordionFilter/AccordionFilterItem/context';
import { useFilterNavigator } from '../context';
import SwitchComponent from '$styleguide/components/common/Switch';

const TextFacet: FC<{
  facet: any;
  styles: Record<string, ViewStyle>;
  onSelect: (item: any) => void;
}> = ({ facet, styles, onSelect }) => {
  const [isEnabled, setIsEnabled] = useState(facet.selected);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    onSelect(facet);
  };

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        styles.itemStyle,
      ]}
    >
      <SwitchComponent
        labelContainer=""
        backgroundColor="green"
        onChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{ marginLeft: 8 }}>{facet.name}</Text>
    </View>
  );
};

export const FilterFacetItemComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;
  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(
    ['itemStyle', 'container'],
    subSchema.blockClass
  );
  const { data } = useAccordionFilterItem();
  const {
    data: { selectFacetHandler },
  } = useFilterNavigator();

  const render = useCallback(() => {
    const facetsComponents = data.values.map((value: any, index: number) => (
      <TextFacet
        styles={styles}
        key={value.href || index}
        facet={value}
        onSelect={selectFacetHandler}
      />
    ));
    return facetsComponents;
  }, [data?.values, selectFacetHandler, styles]);

  return <View style={styles.container}>{render()}</View>;
};
