import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Messaging } from '@models/Messaging';

import { messagingData } from '../../data/messagingData';

interface UserInitialState {
  messages: Messaging[];
}
export const userInitialState: UserInitialState = {
  messages: messagingData,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<Messaging>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { updateMessage } = userSlice.actions;

export default userSlice;
