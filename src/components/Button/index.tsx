import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';
import { Container, Text } from './styles';

export default function Button({ children, loading, onPress, isValid }: { children: string; loading?: boolean; onPress: (() => Promise<void>), isValid?: boolean }) {
  return (
    <Container isValid={isValid} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}
