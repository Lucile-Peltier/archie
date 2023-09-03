import { Messaging, UserMessaging } from '@models/Messaging';

import { convo, julie, me } from './assets';

export const messagingData: Messaging[] = [
  {
    user: 'Julie',
    picture: convo,
    time: 'Today 3:24 PM',
  },
  {
    user: 'Julie',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit. Nam viverra consequat sem at.',
    time: 'Today 3:25 PM',
  },
  {
    user: 'me',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing alit.',
    time: 'Today 3:26 PM',
  },
];

export const userMessagingData: UserMessaging[] = [
  {
    user: 'Julie',
    picture: julie,
  },
  {
    user: 'me',
    picture: me,
  },
];
