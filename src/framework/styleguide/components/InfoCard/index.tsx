/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useCallback, useState } from 'react';
import { useStyleClass } from '../../styleContext';
import {
  Image,
  ImageBackground,
  ImageStyle,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useLinkTo, useNavigation } from '@react-navigation/native';
import { BasicInputReturnType } from '../../hooks/types';
import { ExtensionComponent } from '$engine/extension';
import { useUI } from '../UIActionsHandler';
import FastImage from 'react-native-fast-image';

export const InfoCard: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(
    [
      'container',
      'callToActionBlockClass',
      'callToActionContainer',
      'headLineStyles',
      'subHeadStyles',
      'imageStyles',
    ],
    subSchema.blockClass
  );

  const linkTo = useLinkTo();
  const navigation = useNavigation();
  const { openModal } = useUI();
  const [isLoading, setLoading] = useState(false);

  const RawLink = useCallback(() => {
    return React.createElement(ExtensionComponent, {
      key: `store-link#raw-link-${inputObject.name}`,
      ...{
        cid: `id-link-${inputObject.name}`,
        schemaDocument: {
          title: 'BlockComponent',
          type: 'object',
          properties: {
            test: {
              type: 'store-link',
              label: subSchema.callToActionText,
              url: subSchema.callToActionUrl, // redireciones internar
              displayMode: 'anchor', //button or anchor default value anchor
              variant: 'primary',
              blockClass: subSchema.callToActionBlockClass,
            },
          },
        },
      },
    });
  }, [
    inputObject.name,
    subSchema.callToActionBlockClass,
    subSchema.callToActionText,
    subSchema.callToActionUrl,
  ]);

  

  const redirect = () =>
  subSchema.callToActionUrl && subSchema.callToActionUrl === 'goBack'
      ? navigation.goBack()
      : linkTo(subSchema.callToActionUrl ?? '/feed');

  const onSubmit = async (props: any) => {
    setLoading(true);
    try {
  
      if (subSchema.content && subSchema.modalType) {
        openModal({
          content: subSchema.content,
          modalType: subSchema.modalType,
          style: subSchema.blockClass,
          onAccept: () => {    
            redirect();
          },
        });
      } else {
        redirect();
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false); 
  };

  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={styles.container}
    >
      <FastImage
        style={{
          width: subSchema.isFullModeStyle ? '100%' : subSchema.width,
          height: subSchema.isFullModeStyle ? '100%' : subSchema.height,
          ...styles.imageContainer,
          ...styles.imageStyles 
        }}
        resizeMode= {subSchema.resizeMode}
        source={{ uri: subSchema.imageUrl }}
      >
        {subSchema.headline && (
          <Text
            style={[
              styles.headLineStyles,
              {
                textAlign: subSchema.textAlignment,
                height: subSchema.heightText,
                width: subSchema.widthText,
              },
            ]}
          >
            {subSchema.headline}
          </Text>
        )}
        {subSchema.subhead && (
          <Text
            style={[
              styles.subHeadStyles,
              { textAlign: subSchema.textAlignment },
            ]}
          >
            {subSchema.subhead}
          </Text>
        )}
      </FastImage>
      {subSchema.callToActionMode == 'link' && ( 
        <View
          style={[
            styles.callToActionContainer,
            {
              justifyContent: subSchema.textAlignment,
              alignItems: subSchema.textAlignment,
            },
          ]}
        >
          <RawLink />
        </View>
      )}
    </TouchableOpacity>
  );
};
