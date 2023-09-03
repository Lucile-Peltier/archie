import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import ArchieModal from '@components/common/ArchieModal';
import CustomSafeAreaView from '@components/common/CustomSafeArea';
import Messages from '@components/messaging/Messages';
import useAppSelector from '@hooks/useAppSelector';
import MainNavigator from '@navigators/MainNavigator';
import { getCurrentRoute, navigationRef } from '@navigators/navigationServices';
import { setCurrentRoute } from '@redux/reducers/general';
import store from '@redux/store';

import { userMessagingData } from './src/data/messagingData';

const ArchieApp = () => {
  const visibleModals = useAppSelector(state => state.modal.visibleModals);
  const messages = useAppSelector(state => state.user.messages);

  return (
    <CustomSafeAreaView>
      <StatusBar
        translucent
        backgroundColor={visibleModals.messagingModal ? 'black' : 'transparent'}
        barStyle={visibleModals.messagingModal ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() => {
          const currentRouteName = getCurrentRoute()?.name;
          store.dispatch(setCurrentRoute(currentRouteName));
        }}>
        <MainNavigator />
      </NavigationContainer>
      <ArchieModal isVisible={visibleModals.messagingModal}>
        <Messages users={userMessagingData} messages={messages} />
      </ArchieModal>
    </CustomSafeAreaView>
  );
};

export default ArchieApp;
