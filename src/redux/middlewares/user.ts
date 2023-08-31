/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppMiddleware, AppMiddlewareDispatch } from '@redux/store';

export const userMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppMiddlewareDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (action.type) {
    default:
      break;
  }
  return _next;
};
