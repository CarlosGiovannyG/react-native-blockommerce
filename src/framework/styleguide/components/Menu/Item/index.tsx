import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useStyleClass } from '../../../styleContext';
import { BasicInputReturnType } from '../../../hooks/types';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { useLinkTo } from '@react-navigation/native';

export const MenuItem: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();

  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const blocks = useChildrenBlocks(subSchema.blocks);
  const linkTo = useLinkTo();

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
      linkTo(subSchema.redirectTo ?? '/feed');
    }
  };

  return (
    <TouchableOpacity
      onPress={() => OpenURLButton(subSchema.redirect)}
      style={styles.container}
    >
      {blocks}
    </TouchableOpacity>
  );
};
