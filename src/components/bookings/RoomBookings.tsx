import React, { useState } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import { location } from '@assets/common';
import ColorConstants from '@constants/ColorConstants';
import { Booking } from '@models/UserBooking';

import ShowMore from './ShowMore';
import ArchieButton, { ArchieButtonType } from '../common/ArchieButton';

interface Props {
  bookings: Booking[];
}

const RoomBookings = ({ bookings }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const renderBooking = (booking: Booking) => {
    return (
      <View style={styles.bookings}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={booking.picture} style={styles.image} />
          <View style={{ paddingLeft: 8 }}>
            <Text style={styles.name}>{booking.roomName}</Text>
            <Text style={styles.description}>{booking.date}</Text>
          </View>
        </View>
        <View style={{ paddingEnd: 14 }}>
          <ArchieButton icon={location} type={ArchieButtonType.SECONDARY} />
        </View>
      </View>
    );
  };

  if (bookings.length === 1) {
    return <View style={styles.container}>{renderBooking(bookings[0])}</View>;
  } else {
    return (
      <View style={styles.container}>
        {renderBooking(bookings[0])}
        {!showMore ? (
          <ShowMore number={bookings.length - 1} onPress={() => setShowMore(true)} />
        ) : (
          <>
            {bookings.map((booking, index) => {
              if (index !== 0) {
                return renderBooking(booking);
              }
            })}
          </>
        )}
      </View>
    );
  }
};

export default RoomBookings;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
  },
  bookings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 3,
  },
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
  image: {
    width: 40,
    height: 30,
    borderRadius: 4,
  },
});
