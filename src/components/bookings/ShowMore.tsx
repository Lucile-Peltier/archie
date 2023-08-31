import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ColorConstants from '@constants/ColorConstants';

interface Props {
  number: number;
  onPress: () => void;
}

const ShowMore = ({ number, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Show {number} more bookings</Text>
    </TouchableOpacity>
  );
};

export default ShowMore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.BLUE.EXTRA_LIGHT,
    borderRadius: 8,
    marginEnd: 14,
    marginTop: 15,
  },
  text: {
    color: ColorConstants.BLUE.MAIN,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 18.82,
    textAlign: 'center',
    paddingVertical: 10.5,
  },
});
