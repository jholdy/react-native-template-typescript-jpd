import 'config/ReactotronConfig';
import registerScreens, {appScreens} from 'appNavigation/index';
import {Navigation} from 'react-native-navigation';
import appColors from 'utils/appColors';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: appScreens.loginScreen,
        options: {
          layout: {
            backgroundColor: appColors.primary,
          },
        },
      },
    },
  });
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: appColors.primary,
    },
    statusBar: {
      backgroundColor: appColors.primary,
      style: 'light',
    },
  });
});
