import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import ColorConstants from '@constants/ColorConstants';
import { UserMessaging } from '@models/Messaging';

interface Props {
  user: UserMessaging;
}

const MessagingHeader = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={user.picture} style={styles.icon} resizeMode="contain" />
      <Text style={styles.name}>{user.user}</Text>
    </View>
  );
};

export default MessagingHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: ColorConstants.BLACK[6],
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.8,
    color: ColorConstants.BLACK.BLACK,
    paddingStart: 10,
  },
  icon: {
    borderRadius: 7,
    width: 24,
    height: 24,
  },
});
