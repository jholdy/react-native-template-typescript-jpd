import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';

const prepareIcons = async () => {
  const icons = await Promise.all([
    MaterialCommunityIcons.getImageSource('logout', 30),
    MaterialCommunityIcons.getImageSource('chevron-left', 40),
  ]);
  const [logout, back] = icons;
  return {
    logout,
    back,
  };
};

export default prepareIcons;
