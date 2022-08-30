import React, { FC } from 'react';
import { View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { BasicInputReturnType } from '../../../hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { SelectGroupContextProvider } from './context';
import { useFormHandler } from '../context';
import { useAddresses } from '$commerce/customer/address';
import { useRoute } from '@react-navigation/native';

export const SelectGroupComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { control } = useFormContext();

  const { blocks = [] } = subSchema;

  const children = useChildrenBlocks(blocks);

  const { data: addresses } = useAddresses();
  const route = useRoute();

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: subSchema.isRequired,
        }}
        render={({ field: { onChange, value } }) => (
          <SelectGroup
            data={value}
            onSelect={(selectedItem: any) =>
              onChange({ ...value, ...selectedItem })
            }
            name={subSchema.name || inputObject.name}
          >
            {children}
          </SelectGroup>
        )}
        name={subSchema.name || inputObject.name}
      />
    </View>
  );
};

interface SelectGroupProps {
  data: any[];
  onSelect: (selectedItem: any, index: any) => void;
  name: string;
}

const SelectGroup: FC<SelectGroupProps> = ({ onSelect, children, name, data }) => {
  const { defaultValues } = useFormHandler();

  return (
    <SelectGroupContextProvider
      config={{ onSelectHandler: onSelect, data: defaultValues, name }}
    >
      {children}
    </SelectGroupContextProvider>
  );
};
