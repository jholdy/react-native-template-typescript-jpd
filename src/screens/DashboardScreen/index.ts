import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';
import { appButtons } from 'appNavigation';
import { goLoginScreen } from 'appNavigation/nonAuthRoutes';

export default function DashboardScreen({ componentId }) {
  useNavigationButtonPress(e => {
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

DashboardScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};
