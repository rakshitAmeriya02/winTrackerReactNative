import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import commonReducer from './commonReducer';

export default () => {
  const rootReducer = combineReducers({
    commonReducer,
  });

  return configureStore(rootReducer);
};