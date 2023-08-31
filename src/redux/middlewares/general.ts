/* eslint-disable @typescript-eslint/no-unused-vars */
import { initApp } from '@redux/reducers/general';
import { AppMiddleware, AppMiddlewareDispatch } from '@redux/store';

export const generalMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppMiddlewareDispatch = store.dispatch;
  const _next = next(action);

  switch (action.type) {
    case initApp.type: {
      break;
    }
  }
  return _next;
};
