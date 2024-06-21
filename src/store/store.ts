import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { CounterState } from './counterSlice';  // Import the CounterState type

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  counter: CounterState;  // Explicitly define the RootState type
};
export type AppDispatch = typeof store.dispatch;

export default store;
