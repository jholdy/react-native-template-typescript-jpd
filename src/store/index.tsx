import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import reducers from './ducks';
import rootSaga from './sagas';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
  timeout: 0
};

const { createSagaMonitor, createEnhancer } = Reactotron;

const sagaMonitor: any =
  __DEV__ && createSagaMonitor
    ? createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [sagaMiddleware];

const createCompose =
  __DEV__ && createEnhancer
    ? compose(applyMiddleware(...middlewares), createEnhancer())
    : compose(applyMiddleware(...middlewares));

export default () => {
  const store = createStore(persistedReducer, createCompose);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
