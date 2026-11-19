import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/homePage/slice';
import reduxLogger from "redux-logger";
import ProductsPageReducer from './screens/productsPage/slice';

// Redux store is created once when your application starts, 
// not every time a page loads.
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer, // Redux calls the reducer to get its initial state.
    productsPage: ProductsPageReducer
  },
});
// the store is connected to your React application: <Provider store={store}>
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
 