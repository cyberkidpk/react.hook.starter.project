import messengingReducer from '../app-reducers/app.messenging';
import confineReducerForStore from '../app-utils/combine.reducer.util';

export const initialState = {
  messenging: { message: {} },
};
console.log(messengingReducer);
const appReducers = { messenging: messengingReducer };

export const appStore = { initialState, store: confineReducerForStore(appReducers) };
