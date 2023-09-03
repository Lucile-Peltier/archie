import React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';

import Modal from 'react-native-modal';

import ColorConstants from '@constants/ColorConstants';
import ModalsEnum from '@enums/Modals';
import useAppDispatch from '@hooks/useAppDispatch';
import { hideModal } from '@redux/reducers/modals';

interface Props {
  isVisible?: boolean;
  children?: React.ReactNode;
}

const ArchieModal: React.FC<Props> = ({ isVisible, children }) => {
  const dispatch = useAppDispatch();
  const onRequestClose = () => {
    dispatch(hideModal(ModalsEnum.messagingModal));
  };

  return (
    <Modal
      supportedOrientations={['landscape', 'portrait', 'portrait-upside-down']}
      swipeDirection={'down'}
      backdropOpacity={1}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
      isVisible={isVisible}
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      propagateSwipe
      avoidKeyboard>
      <SafeAreaView
        style={{
          backgroundColor: ColorConstants.WHITE,
          borderRadius: 24,
          overflow: 'hidden',
        }}>
        <View style={styles.container}>
          <View style={styles.dash} />
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.WHITE,
    paddingVertical: 16,
    alignSelf: 'stretch',
  },
  dash: {
    alignSelf: 'center',
    width: 32,
    height: 5,
    backgroundColor: ColorConstants.BLACK[5],
    marginBottom: 9,
    borderRadius: 100,
  },
});

export default ArchieModal;
