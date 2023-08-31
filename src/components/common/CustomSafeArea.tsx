import React from 'react';

import { View } from 'react-native';

import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';

import ColorConstants from '@constants/ColorConstants';

interface Props {
  children?: React.ReactNode;
}

const CustomSafeAreaView: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          const safeAreaStyle = insets && {
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          };
          return <View style={{ flex: 1, backgroundColor: ColorConstants.WHITE, ...safeAreaStyle }}>{children}</View>;
        }}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProvider>
  );
};

export default CustomSafeAreaView;
