import { createSlice } from '@reduxjs/toolkit';

import ModalsEnum from '@enums/Modals';

/**
 * INITIAL STATE
 */

export interface DialogInitialState {
  visibleModals: Record<keyof typeof ModalsEnum, boolean>;
}

const initialState: DialogInitialState = {
  visibleModals: Object.keys(ModalsEnum).reduce<Record<keyof typeof ModalsEnum, boolean>>(
    (acc: Record<keyof typeof ModalsEnum, boolean>, key) => {
      acc[key as keyof typeof ModalsEnum] = false;
      return acc;
    },
    {} as Record<keyof typeof ModalsEnum, boolean>,
  ),
};

/**
 * ASYNC THUNK
 */

/**
 * SLICE
 */

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetDialog: _ => ({
      ...initialState,
    }),
    showModal: (state, action) => {
      state.visibleModals = { ...state.visibleModals, [action.payload]: true };
    },
    hideModal: (state, action) => {
      state.visibleModals = { ...state.visibleModals, [action.payload]: false };
    },
  },
});

export default modalSlice.reducer;

export const { resetDialog, showModal, hideModal } = modalSlice.actions;
