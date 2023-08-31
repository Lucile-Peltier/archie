/* eslint-disable react-native/no-unused-styles */
import React from 'react';

import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

import ColorConstants from '@constants/ColorConstants';

interface Props {
  icon: ImageSourcePropType;
  type: ArchieButtonType;
}

const ArchieButton = ({ icon, type }: Props) => {
  return (
    <View style={[styles.container, styles[type]]}>
      <Image source={icon} style={imageStyles[type]} resizeMode="contain" />
    </View>
  );
};

export default ArchieButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.BLUE.MAIN,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    borderRadius: 12,
  },
  secondary: {
    borderRadius: 8,
  },
});

const imageStyles = StyleSheet.create({
  primary: {
    width: 13.3,
    height: 13.3,
    marginHorizontal: 16,
    marginVertical: 13.5,
  },
  secondary: {
    width: 12,
    height: 12,
    marginHorizontal: 16,
    marginVertical: 10.5,
  },
});

export enum ArchieButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
