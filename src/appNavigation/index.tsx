import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

import AppStoreProvider from 'store/AppStoreProvider';

import LoginScreen from 'screens/LoginScreen';
import DashboardScreen from 'screens/DashboardScreen';

export const isAndroid = Platform.OS === 'android';

function WrapComponent(Component: any) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <AppStoreProvider>
        <Component {...props} />
      </AppStoreProvider>
    );
    return <EnhancedComponent />;
  };
}

export const appButtons = {
  logout: 'logout',
};

export const appScreens = {
  loginScreen: 'loginScreen',
  dashboardScreen: 'dashboardScreen',
};

export default function () {
  Navigation.registerComponent(appScreens.loginScreen, () =>
    WrapComponent(LoginScreen),
  );

  Navigation.registerComponent(appScreens.dashboardScreen, () =>
    WrapComponent(DashboardScreen),
  );

  console.tron.log('Register all routes.');
}
