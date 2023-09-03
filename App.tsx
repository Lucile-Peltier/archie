/**
 * archie
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { initApp } from '@redux/reducers/general';
import store, { persistor } from '@redux/store';

import ArchieApp from './ArchieApp';

const App = () => {
  useEffect(() => {
    store.dispatch(initApp());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ArchieApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
