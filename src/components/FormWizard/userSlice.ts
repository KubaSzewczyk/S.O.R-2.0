import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../store";
import type { UserData } from "./types";

export type UsersState = {
  editedUser: UserData[];
};

const initialState: UsersState = {
  editedUser: [],
};

export const editedUser = createSlice({
  name: "editedUser",
  initialState,
  reducers: {
    userToEdit: (state, action: PayloadAction<UserData>) => {
      state.editedUser.push(action.payload);
    },
  },
});

export const { userToEdit } = editedUser.actions;
export const selectUser = (state: RootState) => state.users.users.length;

export default editedUser.reducer;
