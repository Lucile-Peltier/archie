import React, { useRef, useState } from 'react';

import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { location, picture } from '@assets/common';
import ColorConstants from '@constants/ColorConstants';
import useAppDispatch from '@hooks/useAppDispatch';
import { updateMessage } from '@redux/reducers/user';

const MessageTextInput = () => {
  const localRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const ref = localRef;

  const onSubmit = () => {
    dispatch(updateMessage({ user: 'me', message: value, time: 'Today 3:26 PM' }));
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={picture} style={styles.image} resizeMode="contain" />
      </View>
      <TouchableOpacity
        style={styles.textInput}
        onPress={() => ref.current?.focus()}
        hitSlop={{ top: 4, left: 4, bottom: 4, right: 4 }}>
        <TextInput
          ref={ref}
          underlineColorAndroid="transparent"
          style={styles.text}
          value={value}
          placeholderTextColor={ColorConstants.BLACK.BLACK}
          onChangeText={text => setValue(text)}
          placeholder="Aa"
          multiline
          onSubmitEditing={onSubmit}
        />
        {!!value && (
          <TouchableOpacity
            onPress={onSubmit}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            style={{ zIndex: 10 }}>
            <Image source={location} style={styles.send} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: ColorConstants.BLACK[6],
    borderTopWidth: 1,
    paddingTop: 14,
  },
  textInput: {
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: ColorConstants.BLACK[6],
    marginEnd: 18,
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: ColorConstants.BLACK.BLACK,
    fontSize: 13,
    lineHeight: 16,
  },
  imageContainer: {
    borderRadius: 12,
    width: 50,
    height: 50,
    backgroundColor: ColorConstants.BLACK[6],
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 14,
  },
  image: {
    width: 26,
    height: 26,
  },
  send: {
    width: 20,
    height: 20,
    tintColor: ColorConstants.BLUE.MAIN,
  },
});

export default MessageTextInput;
