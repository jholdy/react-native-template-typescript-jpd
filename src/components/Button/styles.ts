import styled from 'styled-components/native';
import appColors from '../../utils/appColors';

export const Container = styled.TouchableOpacity<{isValid?: boolean;}>`
  height: 46px;
  background-color: ${props =>
    props.isValid ? appColors.primary : appColors.disable};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
