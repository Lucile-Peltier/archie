import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { header, write } from '@assets/common';
import ColorConstants from '@constants/ColorConstants';
import ModalsEnum from '@enums/Modals';
import useAppDispatch from '@hooks/useAppDispatch';
import { showModal } from '@redux/reducers/modals';

import ArchieButton, { ArchieButtonType } from './ArchieButton';

const HeaderBar = () => {
  const headerBarHeight = 56;
  const dispatch = useAppDispatch();

  return (
    <View style={[styles.container, { height: headerBarHeight }]}>
      <View style={styles.left}>
        <ArchieButton image={header} type={ArchieButtonType.HEADER} isColor={true} />
        <Text style={styles.title}>Who is coming</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(showModal(ModalsEnum.messagingModal))} style={styles.button}>
        <ArchieButton image={write} type={ArchieButtonType.PRIMARY} />
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
