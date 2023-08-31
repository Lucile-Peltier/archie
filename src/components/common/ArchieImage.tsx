/* eslint-disable react-native/no-unused-styles */
import React from 'react';

import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

import ColorConstants from '@constants/ColorConstants';

interface Props {
  image: ImageSourcePropType;
  type: ArchieImageType;
  isColor?: boolean;
}

const ArchieImage = ({ image, type, isColor = false }: Props) => {
  return (
    <View style={[isColor && { backgroundColor: ColorConstants.HEADER }, styles.container, styles[type]]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default ArchieImage;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderRadius: 10.7,
  },
  primary: {
    borderRadius: 12,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export enum ArchieImageType {
  HEADER = 'header',
  PRIMARY = 'primary',
}
