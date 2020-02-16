import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { configureInterceptor } from 'src/lib/api/setup';
import reducers from 'src/redux/reducers/index';
import sagas from 'sagas';
import Config from 'config';

let store;

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['PERSIST']
};

const persistedReducer = persistReducer(persistConfig, reducers);

let middleware = null;
/* global __DEV__ */
if (__DEV__ && Config.useReduxLogger) {
  middleware = applyMiddleware(sagaMiddleware, logger);
} else {
  middleware = applyMiddleware(sagaMiddleware);
}

function configureStore() {
  store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store, { timeout: 1000 }, (err) => {
    if (err) {
      console.log("Persist took longer time to hydrate => ", err.toString());
    }
  });
  // const persistor = persistStore(store, null, null).purge()
  configureInterceptor();
  sagaMiddleware.run(sagas);
  return { store, persistor };
}

export const getStore = () => store;

module.exports = configureStore;
