import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthReducer} from './reducer'
import { createStore ,combineReducers,applyMiddleware } from 'redux';
import {persistReducer,persistStore} from 'redux-persist'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
   AuthReducer
  });
  
  const persistConfig={
      key:'root',
      storage:AsyncStorage,
      whitelist:['AuthReducer'],
  }
  
  const persistedReducer=persistReducer(persistConfig,rootReducer)
  
  export const store=createStore(persistedReducer,applyMiddleware(thunk))
  export const persistor=persistStore(store)