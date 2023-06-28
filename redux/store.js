import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import {eventsReducer} from './slices/eventsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    events: eventsReducer,
  },
})