import React from 'react';

import { Image, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { headphones_customer_support, house, human_resources, office_chair_table, shop_pin } from '@assets/bottomBar';
import ColorConstants from '@constants/ColorConstants';

const BottomBar = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: insets.bottom !== 0 ? insets.bottom : 10 }]}>
      <Image source={house} style={styles.image} />
      <Image source={office_chair_table} style={styles.image} />
      <Image source={human_resources} style={styles.image} />
      <Image source={shop_pin} style={styles.image} />
      <Image source={headphones_customer_support} style={styles.image} />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ColorConstants.WHITE,
    borderColor: ColorConstants.OPACITY[8],
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 8,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10.0,
    position: 'absolute',
    alignSelf: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginHorizontal: 20.7,
    marginVertical: 20,
  },
});
