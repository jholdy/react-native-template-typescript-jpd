import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '.';

const { persistor, store } = configureStore();

class AppStoreProvider extends PureComponent {
  // eslint-disable-next-line react/static-property-placement
  static childContextTypes = {
    store: PropTypes.shape({}),
  };

  getChildContext() {
    return {
      store,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

AppStoreProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppStoreProvider;
