import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

export default function Button({ children, loading, isValid, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...rest} isValid={isValid}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  isValid: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  loading: false,
  isValid: false,
};
