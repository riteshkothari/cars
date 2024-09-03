import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/CarsSlice";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add the logger middleware
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };
