import { UserBooking } from '@models/UserBooking';

import { barth, george, mandela, masca, mina } from './assets';

export const homeData: UserBooking[] = [
  {
    name: 'George Masco',
    picture: george,
    description: '💪 Work from the office',
    bookings: [
      {
        roomName: 'Mandela Room',
        picture: mandela,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
      {
        roomName: 'Mandela Room',
        picture: mandela,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
      {
        roomName: 'Barth Room',
        picture: barth,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
    ],
  },
  {
    name: 'Mina Masco',
    picture: mina,
    description: '💪 Work from the office',
    bookings: [
      {
        roomName: 'Barth Room',
        picture: barth,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
    ],
  },
  {
    name: 'Masca Masco',
    picture: masca,
    description: '💪 Work from the office',
    bookings: [
      {
        roomName: 'Mandela Room',
        picture: mandela,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
      {
        roomName: 'Barth Room',
        picture: barth,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
      {
        roomName: 'Mandela Room',
        picture: mandela,
        date: 'Jan 17th → 10:00 AM - 11:30 AM',
      },
    ],
  },
];
