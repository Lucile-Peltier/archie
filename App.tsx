/**
 * archie
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CustomSafeAreaView from '@components/common/CustomSafeArea';
import MainNavigator from '@navigators/MainNavigator';
import { getCurrentRoute, navigationRef } from '@navigators/navigationServices';
import { initApp, setCurrentRoute } from '@redux/reducers/general';
import store, { persistor } from '@redux/store';

const App = () => {
  useEffect(() => {
    store.dispatch(initApp());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomSafeAreaView>
          <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
          <NavigationContainer
            ref={navigationRef}
            onStateChange={() => {
              const currentRouteName = getCurrentRoute()?.name;
              store.dispatch(setCurrentRoute(currentRouteName));
            }}>
            <MainNavigator />
          </NavigationContainer>
        </CustomSafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
