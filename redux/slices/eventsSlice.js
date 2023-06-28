import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const connectWebSocket = createAsyncThunk(
  'events/connect',
  async (_, { dispatch }) => {
    const socket = new WebSocket('wss://test.relabs.ru/event');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(eventsSlice.actions.setData(data));
    };

    socket.onclose = () => {
      // Actions to take on connection close
    };

    return 'wss://test.relabs.ru/event'; // Return the URL instead of the WebSocket object
  }
);

export const disconnectWebSocket = createAsyncThunk(
  'events/disconnect',
  async (socket) => {
    if (socket !== null) {
      socket.close();
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setData } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
