import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ColorConstants from '@constants/ColorConstants';
import { Messaging, UserMessaging } from '@models/Messaging';

interface Props {
  message: Messaging;
  users: UserMessaging[];
  previousMessage: Messaging | false;
  nextMessage: Messaging | false;
}

const MessageItem = ({ message, users, previousMessage, nextMessage }: Props) => {
  const isMe = message.user === 'me';
  let isLastMessage;
  let isSameUser;
  const [showTimer, setShowTimer] = useState(false);

  if (previousMessage) {
    isSameUser = previousMessage.user === message.user;
    isLastMessage = !nextMessage || (previousMessage.user === message.user && message.user !== nextMessage?.user);
  }
  let imageSource;
  if (message.picture) {
    imageSource = Image.resolveAssetSource(message.picture);
  }

  return (
    <>
      <View style={propStyles({ isMe }).container}>
        {isLastMessage && (
          <Image
            source={isMe ? users[1].picture : users[0].picture}
            style={propStyles({ isMe }).user}
            resizeMode="contain"
          />
        )}
        <View
          style={[
            !isLastMessage && { marginStart: 24 },
            isMe && !isLastMessage && { marginEnd: 32 },
            { marginTop: isSameUser ? 9 : 12 },
          ]}>
          {message.picture && imageSource && (
            <Image
              source={message.picture}
              style={[propStyles({ isMe }).image, { height: (imageSource.height * 230) / imageSource.width }]}
              resizeMode="contain"
            />
          )}
          {message.message && (
            <TouchableOpacity style={propStyles({ isMe }).textContainer} onPress={() => setShowTimer(!showTimer)}>
              <Text style={propStyles({ isMe }).text}>{message.message}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showTimer && <Text style={propStyles({ isMe }).timer}>{message.time}</Text>}
    </>
  );
};

export default MessageItem;

const propStyles = StyleSheet.create(({ isMe }: { isMe: boolean }) => ({
  container: {
    flexDirection: isMe ? 'row-reverse' : 'row',
    alignItems: 'flex-end',
    alignSelf: isMe ? 'flex-end' : 'baseline',
    width: 238,
  },
  textContainer: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: isMe ? ColorConstants.BLUE.MAIN : ColorConstants.BLACK[6],
  },
  text: {
    color: isMe ? ColorConstants.WHITE : ColorConstants.BLACK[3],
    fontSize: 14,
    lineHeigth: 20.3,
  },
  user: {
    marginStart: isMe ? 8 : 0,
    marginEnd: !isMe ? 8 : 0,
    borderRadius: 74,
    width: 24,
    height: 24,
  },
  image: {
    borderRadius: 19,
    width: 230,
    marginStart: !isMe ? 8 : 0,
    marginEnd: isMe ? 8 : 0,
  },
  timer: {
    fontSize: 11,
    lineHeight: 16,
    paddingStart: isMe ? 0 : 24,
    paddingEnd: !isMe ? 0 : 24,
    marginStart: isMe ? 0 : 8,
    marginEnd: !isMe ? 0 : 8,
    marginTop: 2,
    textAlign: isMe ? 'right' : 'left',
    color: ColorConstants.BLACK[3],
  },
}));
