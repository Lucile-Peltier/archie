import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import RoomBookings from '@components/bookings/RoomBookings';
import ArchieImage, { ArchieImageType } from '@components/common/ArchieImage';
import ColorConstants from '@constants/ColorConstants';
import { UserBooking } from '@models/UserBooking';

interface Props {
  item: UserBooking;
}

const Booking = ({ item }: Props) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 11 }}>
        <ArchieImage image={item.picture} type={ArchieImageType.PRIMARY} />
        <View style={{ paddingLeft: 8 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
      <RoomBookings bookings={item.bookings} />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    color: ColorConstants.BLACK.BLACK,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 13,
    color: ColorConstants.BLACK[3],
  },
});
