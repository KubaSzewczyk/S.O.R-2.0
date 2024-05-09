import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../store";
import type { UserData } from "./types";

export type UsersState = {
  users: UserData[];
};

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action: PayloadAction<UserData>) => {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    },
    editUser: (state, action: PayloadAction<UserData>) => {
      const updatedUsers = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (updatedUsers !== -1) {
        return {
          ...state,
          users: state.users.map((user, index) =>
            index === updatedUsers ? action.payload : user
          ),
        };
      }
      return state;
    },
  },
});

export const { addUser, removeUser, editUser } = usersSlice.actions;
export const selectUser = (state: RootState) => state.users.users.length;

export default usersSlice.reducer;
