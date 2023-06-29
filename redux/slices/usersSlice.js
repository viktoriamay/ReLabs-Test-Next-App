import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
  async ({ limit, offset }) => {
    const response =
      await fetch(`https://test.relabs.ru/api/users/list?limit=${limit}&offset=${offset}
    `).then((data) => data.json());
    return response;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users.items = state.users.items.filter(
        (user) => user.id !== userId
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
