import {Navigation} from 'react-native-navigation';
import {appScreens} from 'appNavigation';
import appColors from 'utils/appColors';

const goLoginScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: appScreens.loginScreen,
              name: appScreens.loginScreen,
              options: {
                topBar: {
                  visible: false,
                  background: {
                    color: appColors.primary,
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

export {goLoginScreen};
