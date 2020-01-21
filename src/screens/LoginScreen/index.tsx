import React from 'react';
import { Text } from 'react-native';

import Button from '../../components/Button';
import { goDashBoardScreen } from '../../appNavigation/authRoutes';
import { Container } from './styles';

export default function LoaderScreen() {
  return (
    <Container>
      <Text>Login</Text>
      <Button onPress={goDashBoardScreen}>Ir para o Dashboard</Button>
    </Container>
  );
}
