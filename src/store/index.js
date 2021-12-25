import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SearchReducer from '../reducers/searchReducer';
import cartItemsReducer from '../reducers/cartItemsReducer';
import cartReducer from '../reducers/cartReducer';
import orderFormReducer from '../reducers/orderFormReducer';
import filterReducer from '../reducers/filterReducer';
import topSalesReducer from '../reducers/topSalesReducer';
import itemDetailReducer from '../reducers/itemDetailsReducer';
import itemsReducer from '../reducers/itemsReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartitems'],
};

const reducerRoot = combineReducers({
  search: SearchReducer,
  filter: filterReducer,
  cartitems: cartItemsReducer,
  cart: cartReducer,
  orderform: orderFormReducer,
  topsales: topSalesReducer,
  item: itemDetailReducer,
  items: itemsReducer,
  categories: categoriesReducer,
});
const persReducer = persistReducer(persistConfig, reducerRoot);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
