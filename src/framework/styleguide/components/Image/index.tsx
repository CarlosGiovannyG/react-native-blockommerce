import { useLinkTo } from '@react-navigation/native';
import React, { FC, Fragment, useCallback } from 'react';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';

export const ImageComponent: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const linkTo = useLinkTo();

  //const redirection = subSchema.redirect && subSchema.external_uri ? Linking.canOpenURL('framework://cart') : linkTo(subSchema.redirect ?? '/feed')

  const OpenURLButton = async (url: string) => {
    if (subSchema.redirect && subSchema.external_uri) {
      // Checking if the link is supported for links with custom URL scheme.
      const redirection = await Linking.canOpenURL(url);

      if (redirection) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    } else {
      linkTo(subSchema.redirect ?? '/feed');
    }
  };

  const ImageComponent = useCallback(() => {
    return (
      <View style={styles.container}>
        <FastImage
          style={{
            width: subSchema.width ?? '100%',
            height: subSchema.height ?? '100%',
          }}
          source={{ uri: subSchema.uri }}
          resizeMode={subSchema.resizeMode || FastImage.resizeMode.contain}
        />
      </View>
    );
  }, []);

  const renderImage = useCallback(() => {
    if (subSchema.redirect) {
      return (
        <TouchableOpacity onPress={() => OpenURLButton(subSchema.redirect)}>
          {ImageComponent()}
        </TouchableOpacity>
      );
    } else {
      return ImageComponent();
    }
  }, []);

  return renderImage();
};
