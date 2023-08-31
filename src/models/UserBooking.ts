import { ImageSourcePropType } from 'react-native';

export interface UserBooking {
  name: string;
  picture: ImageSourcePropType;
  description: string;
  bookings: Booking[];
}

export interface Booking {
  roomName: string;
  picture: ImageSourcePropType;
  date: string;
}
