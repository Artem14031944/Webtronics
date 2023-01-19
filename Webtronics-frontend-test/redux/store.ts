import { createStore, combineReducers, compose } from "redux";
import sliderReducer  from './reducers/sliderReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  sliderReducer,
});

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>;
export default store;
