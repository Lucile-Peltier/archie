import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { header, write } from '@assets/common';
import ColorConstants from '@constants/ColorConstants';

import ArchieButton, { ArchieButtonType } from './ArchieButton';
import ArchieImage, { ArchieImageType } from './ArchieImage';

const HeaderBar = () => {
  const headerBarHeight = 56;

  return (
    <View style={[styles.container, { height: headerBarHeight }]}>
      <View style={styles.left}>
        <ArchieImage image={header} type={ArchieImageType.HEADER} isColor={true} />
        <Text style={styles.title}>Who is coming</Text>
      </View>
      <TouchableOpacity onPress={() => null} style={styles.button}>
        <ArchieButton icon={write} type={ArchieButtonType.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23.4,
    color: ColorConstants.BLACK.BLACK,
    textAlign: 'center',
    paddingLeft: 8,
  },
  button: {
    justifyContent: 'center',
  },
});
