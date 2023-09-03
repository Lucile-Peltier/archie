import React, { useRef } from 'react';

import { FlatList, ListRenderItem } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Messaging, UserMessaging } from '@models/Messaging';

import MessageItem from './MessageItem';
import MessageTextInput from './MessageTextInput';
import MessagingHeader from './MessagingHeader';

interface Props {
  messages: Messaging[];
  users: UserMessaging[];
}

const Messages = ({ messages, users }: Props) => {
  const ref = useRef(null);

  const renderItem: ListRenderItem<Messaging> = ({ item, index }) => {
    return (
      <MessageItem
        message={item}
        users={users}
        previousMessage={index !== 0 && messages[index - 1]}
        nextMessage={index !== messages.length && messages[index + 1]}
      />
    );
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid keyboardShouldPersistTaps={'handled'}>
      <MessagingHeader user={users[0]} />
      <FlatList
        ref={ref}
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
      <MessageTextInput />
    </KeyboardAwareScrollView>
  );
};

export default Messages;
