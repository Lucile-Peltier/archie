import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralInitialState {
  currentRoute?: string;
  previousRoute?: string;
  remoteConfigValues: { [key: string]: string };
}

export const generalInitialState: GeneralInitialState = {
  currentRoute: '',
  previousRoute: '',
  remoteConfigValues: {},
};

const generalSlice = createSlice({
  name: 'general',
  initialState: generalInitialState,
  reducers: {
    initApp: () => undefined,
    setCurrentRoute: (state, action: PayloadAction<string | undefined>) => {
      state.previousRoute = state.currentRoute;
      state.currentRoute = action.payload;
    },
  },
});

export const { initApp, setCurrentRoute } = generalSlice.actions;

export default generalSlice;
