// // import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* export const connectWebSocket = createAsyncThunk(
  'websocket/connect',
  async (_, { dispatch }) => {
    const socket = new WebSocket('wss://test.relabs.ru/event');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(websocketSlice.actions.setData(data));
    };

    socket.onclose = () => {
      // Действия при разрыве соединения
    };

    return socket;
  }
); */

export const connectWebSocket = createAsyncThunk(
  'websocket/connect',
  async (_, { dispatch }) => {
    const socket = new WebSocket('wss://test.relabs.ru/event');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(websocketSlice.actions.setData(data));
    };

    socket.onclose = () => {
      // Actions to take on connection close
    };

    return 'wss://test.relabs.ru/event'; // Return the URL instead of the WebSocket object
  }
);

export const disconnectWebSocket = createAsyncThunk(
  'websocket/disconnect',
  async (socket) => {
    if (socket !== null) {
      socket.close();
    }
  }
);

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setData } = websocketSlice.actions;
export default websocketSlice.reducer;

/* import { createAction, createSlice } from "@reduxjs/toolkit";

export const connectWebSocket = createAction('WEBSOCKET_CONNECT');
export const disconnectWebSocket = createAction('WEBSOCKET_DISCONNECT');

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setData } = websocketSlice.actions;
export default websocketSlice.reducer;

export const websocketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    // Действия при успешном подключении
  };

  const onClose = store => () => {
    // Действия при разрыве соединения
  };

  const onMessage = store => (event) => {
    const data = JSON.parse(event.data);
    store.dispatch(setData(data));
  };

  return store => next => (action) => {
    switch (action.type) {
      case 'WEBSOCKET_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // Подключение к вебсокету
        socket = new WebSocket('wss://test.relabs.ru/event');
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;

      case 'WEBSOCKET_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;

      default:
        return next(action);
    }
  };
}; */



// const websocketSlice = createSlice({
//   name: 'websocket',
//   initialState: {
//     data: null,
//     socket: null,
//   },
//   reducers: {
//     setData: (state, action) => {
//       state.data = action.payload;
//     },
//     setSocket: (state, action) => {
//       state.socket = action.payload;
//     },
//   },
// });

// export const { setData, setSocket } = websocketSlice.actions;

// export const connectWebSocket = () => (dispatch) => {
//   const socket = new WebSocket('wss://test.relabs.ru/event');

//   socket.onmessage = (event) => {
//     const data = JSON.parse(event.data);
//     dispatch(setData(data));
//   };

//   dispatch(setSocket(socket));

//   return () => {
//     socket.close();
//   };
// };

// export default websocketSlice.reducer;

// const { createSlice } = require('@reduxjs/toolkit');
// const initialState = {
//   // events: []
//   connect: false,
// };

// const eventsSlice = createSlice({
//   name: 'events',
//   initialState,
//   reducers: {
//     connect (state) {
// state.connect = true
//     },
//     disconnect (state) {
//       state.connect = false

//     },
//   },
// });

// export const {connect, disconnect} = eventsSlice.actions
// export const eventsReducer = eventsSlice.reducer;

// // const socket = new WebSocket('wss://test.relabs.ru/event')

// // export const eventMiddleware = (params) => (next) => (action) => {
// //   const {dispatch, getState} = params
// //   const {type} = action

// //   switch(type) {
// //     case 'socket/connect':
// //       socket.connect('wss://test.relabs.ru/event')
// //   }
// //   // let ws;

// //   // return (storeAPI) => (next) => (action) => {
// //   //   if (action.type === getEvents.fulfilled.type) {
// //   //     if (!ws) {
// //   //       ws = new WebSocket('wss://test.relabs.ru/event');
// //   //       ws.onmessage = (event) => {
// //   //         const parsedData = JSON.parse(event.data);
// //   //         storeAPI.dispatch(addEvent(parsedData));
// //   //       };
// //   //     }
// //   //   }

// //   //   return next(action);
// //   // };
// // };

// // // export const getEvents = createAsyncThunk(
// // //   'events/getEvents',
// // //   async (_, { getState, dispatch }) => {
// // //     return new Promise((resolve) => {
// // //       const ws = new WebSocket('wss://test.relabs.ru/event');
// // //       ws.onmessage = (event) => {
// // //         const parsedData = JSON.parse(event.data);
// // //         // Диспатчим новое событие addEvent, чтобы добавить его в "events"
// // //         dispatch(addEvent(parsedData));
// // //         resolve(parsedData);
// // //       };
// // //     });
// // //   }
// // // )

// // export const getEvents = createAsyncThunk(
// //   'events/getEvents',
// //   async (_, { dispatch }) => {
// //     // Ничего не делаем
// //   }
// // );

// // export const eventsSlice = createSlice({
// //   name: 'events',
// //   initialState,
// //   reducers: {
// //     addEvent: (state, action) => {
// //       state.events.push(action.payload);
// //     },
// //   },
// //   extraReducers: {
// //     // ...
// //   },
// //   extraReducers: (builder) => {
// //     builder.addMatcher(
// //       (action) => action.type === addEvent.type,
// //       (state, action) => {
// //         state.events.push(action.payload);
// //       }
// //     );
// //   },
// // });

// // export const eventsReducer = eventsSlice.reducer;

// // export const { addEvent } = eventsSlice.actions;
