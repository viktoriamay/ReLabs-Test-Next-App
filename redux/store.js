import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
// import { eventsReducer } from "./slices/eventsSlice";
// import websocketReducer from "./slices/eventsSlice";

import websocketReducer, { websocketMiddleware } from './slices/eventsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // events: eventsReducer
    // websocket: websocketReducer,
    // messages: messageReducer,
    websocket: websocketReducer,
  },
  // middleware: [...getDefaultMiddleware(), websocketMiddleware()],
})