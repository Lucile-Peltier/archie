import { ImageSourcePropType } from 'react-native';

export interface Messaging {
  user: string;
  picture?: ImageSourcePropType;
  message?: string;
  time: string;
}

export interface UserMessaging {
  user: string;
  picture: ImageSourcePropType;
}
