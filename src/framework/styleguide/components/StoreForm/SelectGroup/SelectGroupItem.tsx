import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import SelectDropdown from 'react-native-select-dropdown';
import { useSelectGroupContext } from './context';

export const SelectGroupItemComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { onSelectHandler, data, name } = useSelectGroupContext();
  const [disabled, setDisabled] = useState(false);
  const [localData, setLocalData] = useState([]);
  const { watch } = useFormContext();
  const formValues = watch();
  const { inputObject } = props;

  useEffect(() => {
    if (!subSchema.dependency && data) {
      if (subSchema.name in data) {
        setLocalData(data[subSchema.name]);
      }
    }
  }, [data]);

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(
    ['textStyles', 'buttomStyle', 'buttomTextStyle'],
    subSchema.blockClass
  );

  const block = useSlotBlock(subSchema.iconDisable);

  useEffect(() => {
    handleDependency();
  }, [formValues]);

  const handleDependency = useCallback(() => {
    if (!subSchema.dependency) return null;
    if (name in formValues) {
      if (typeof formValues[name] === 'object') {
        if (subSchema.name in data && subSchema.dependency in formValues[name]) {
          if (data[subSchema.name][formValues[name][subSchema.dependency].value]) {
            setLocalData(
              data[subSchema.name][formValues[name][subSchema.dependency].value]
            );
            setDisabled(false);
          } else {
             //onSelectHandler({ [subSchema.name]: control._defaultValues['address'][subSchema.dependency].value }, 0);
          }
          /**
           * father: [{ value: 'Bogota DC' }]
           * dependency: { "Bogota DC":  [{ value: 'Bogota DC' }]}
           */

        }
      } else {
        setDisabled(true);
      }
    }
  }, [ formValues, name, subSchema.dependency, subSchema.name]);

  const {
    control,
    formState: { errors },
  } = useFormContext();


  var labelOpt = localData?.filter(function (opt: any) {
    if ('address' in control._defaultValues) {
      if (subSchema.name in control._defaultValues['address']) {
        return opt?.value?.toLowerCase() === control._defaultValues['address'][subSchema.name]?.value?.toLowerCase();
      }
    }
  });



  const getDefaultButtonText = useMemo(() => {
    if ('address' in control._defaultValues) {
      if (subSchema.name in control._defaultValues['address']) {
        if (labelOpt?.length) return labelOpt[0]?.label

      }
    }
    return subSchema.placeholder
  }, [labelOpt])


  return (
    <SelectDropdown
      defaultButtonText={getDefaultButtonText}
      disabled={disabled}
      data={localData}
      onSelect={(selectedItem, index) => {
        onSelectHandler({ [subSchema.name]: selectedItem }, index);
      }}
      buttonStyle={styles.buttomStyle}
      buttonTextStyle={styles.buttomTextStyle}
      renderDropdownIcon={() => {
        return block;
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem.value;
      }}
      rowTextForSelection={(item) => {
        return item.value;
      }}
    />
  );
};
