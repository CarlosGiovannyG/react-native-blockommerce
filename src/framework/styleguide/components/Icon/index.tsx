/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {
  FC,
  Fragment,
  memo,
  Suspense,
  useCallback,
  useMemo,
} from 'react';
import { View } from 'react-native';
import { useStyleClass } from '../../styleContext';
import { BasicInputReturnType } from '../../hooks/types';
import { useTheme } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import { useUI } from '../UIActionsHandler';

export const IconComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const {
    theme: { palette },
  } = useTheme();

  const color = useMemo(() => {
    if (subSchema.variant) {
      return palette[subSchema.variant][palette.type];
    } else if (subSchema.color) {
      return subSchema.color;
    }
    return palette.primary[palette.type];
  }, [palette, subSchema.color, subSchema.variant]);

  const linkTo = useLinkTo();

  const navigation = useNavigation();
  const { openModal, closeModal } = useUI();


  const handleModal = async (props: any) => {
    if (subSchema.content && subSchema.modalType) {
    
         openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {
            subSchema.redirectTo ? redirect() : closeModal();
          },
        });
   
    } else {
      subSchema.redirectTo ? redirect() : closeModal();
    }
  };

  const redirect = () =>
    subSchema.redirectTo && subSchema.redirectTo === 'goBack'
      ? navigation.goBack()
      : linkTo(subSchema.redirectTo ?? '/feed');

  const IconRender = useCallback(() => {
    return (
      <View style={styles.container} pointerEvents="none">
        <IconExtension
          lib={subSchema.lib}
          name={subSchema.name}
          size={subSchema.size}
          color={color}
        />
      </View>
    );
  }, [color]);

  return (
    <Fragment>
      <Suspense fallback={null}>
        {subSchema.redirectTo  || subSchema.content ? (
          <TouchableOpacity onPress={handleModal}>{IconRender()}</TouchableOpacity>
        ) : (
          IconRender()
        )}
      </Suspense>
    </Fragment>
  );
};

const getLib = (lib: string) => {
  switch (lib) {
    case 'FontAwesome5':
      return React.lazy(() => import('react-native-vector-icons/FontAwesome5'));
    case 'Ionicons':
      return React.lazy(() => import('react-native-vector-icons/Ionicons'));

    case 'MaterialIcons':
      return React.lazy(
        () => import('react-native-vector-icons/MaterialIcons')
      );
    case 'Zocial':
      return React.lazy(() => import('react-native-vector-icons/Zocial'));
    case 'MaterialCommunityIcons':
      return React.lazy(
        () => import('react-native-vector-icons/MaterialCommunityIcons')
      );

    default:
      return React.lazy(() => import('react-native-vector-icons/Ionicons'));
  }
};

const IconExtension = ({
  lib,
  name,
  size,
  color,
}: {
  lib: string;
  name: string;
  size: number;
  color: string;
}) => {
  const Icon = useMemo(() => getLib(lib), [lib]);

  return <Icon name={name} size={size} color={color} />;
};
