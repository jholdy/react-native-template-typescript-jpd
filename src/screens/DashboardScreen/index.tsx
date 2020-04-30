import React from 'react';
import {Text, View} from 'react-native';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {appButtons} from 'appNavigation';
import {goLoginScreen} from 'appNavigation/nonAuthRoutes';

export default function DashboardScreen({componentId}: {componentId: string}) {
  useNavigationButtonPress((e) => {
    if (e.buttonId === appButtons.logout) {
      goLoginScreen();
    }
  }, componentId);
  return (
    <View>
      <Text>DashBoard</Text>
    </View>
  );
}
