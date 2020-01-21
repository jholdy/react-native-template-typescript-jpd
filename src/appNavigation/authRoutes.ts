import {Navigation} from 'react-native-navigation';
import {appScreens, appButtons} from './index';
import appColors from '../utils/appColors';
import prepareIcons from './icons';

const goDashBoardScreen = async () => {
  const appIcons = await prepareIcons();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: appScreens.dashboardScreen,
              name: appScreens.dashboardScreen,
              options: {
                topBar: {
                  elevation: 0,
                  noBorder: true,
                  title: {
                    text: 'DashBoard',
                    fontSize: 25,
                    color: appColors.white,
                  },
                  backButton: {
                    color: appColors.white,
                  },
                  leftButtons: [
                    {
                      id: appButtons.logout,
                      icon: appIcons.logout,
                      color: appColors.white,
                    },
                  ],
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

export {goDashBoardScreen};
