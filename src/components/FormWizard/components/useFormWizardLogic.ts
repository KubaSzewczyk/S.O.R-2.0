import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../../hooks/redux";
import { useAppSelector } from "../../../hooks/redux";
import { addUser, removeUser, editUser } from "../usersSlice";

import type { UserData } from "../types";

export const useFormWizardLogic = () => {
  const [page, setPage] = useState(1);
  const [data, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    hobby: "",
    id: "",
  });

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  const handleAddUser = (data: UserData) => {
    const newUser = { ...data, id: uuidv4() };
    dispatch(addUser(newUser));
  };

  const handleRemoveUser = (user: UserData) => dispatch(removeUser(user));

  const handleSaveUser = (user: UserData) => dispatch(editUser(user));

  const handleEditUser = (index: number) => {
    const selectedUserData = users[index];
    setFormData(selectedUserData);
    setPage(0);
  };

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  const FIRST_STEP_INPUTS = {
    name: "Name",
    lastName: "Last name",
  };

  const SECOND_STEP_INPUTS = {
    birthDate: "Birth date",
    hobby: "Hobby",
  };

  return {
    FIRST_STEP_INPUTS,
    SECOND_STEP_INPUTS,
    page,
    data,
    users,
    setPage,
    setFormData,
    handleAddUser,
    handleRemoveUser,
    handleSaveUser,
    handleEditUser,
    handleNextPage,
    handlePrevPage,
  };
};
