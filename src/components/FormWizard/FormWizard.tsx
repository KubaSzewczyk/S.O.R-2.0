import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  FirstStepForm,
  SecondStepForm,
  Summary,
  UsersList,
} from "./components";

import { UserData, State } from "./types";
import { EditForm } from "./components/Form";

enum ActionType {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  EDIT_USER = "EDIT_USER",
}

type Action = {
  type: ActionType;
  payload: UserData;
};

const FIRST_STEP_INPUTS = {
  name: "Name",
  lastName: "Last name",
};

const SECOND_STEP_INPUTS = {
  birthDate: "Birth date",
  hobby: "Hobby",
};

const initialState = {
  users: [],
};

let updatedUsers: number;
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ActionType.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user !== action.payload),
      };
    case ActionType.EDIT_USER:
      updatedUsers = state.users.findIndex(
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
    default:
      return state;
  }
};

export const FormWizard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const [data, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    hobby: "",
    id: "",
  });
  const { users } = state;

  const handleAddUser = (data: UserData) => {
    const newUser = { ...data, id: uuidv4() };
    dispatch({ type: ActionType.ADD_USER, payload: newUser });
  };
  const handleRemoveUser = (user: UserData) => {
    dispatch({ type: ActionType.REMOVE_USER, payload: user });
  };
  const handleSaveUser = (user: UserData) => {
    dispatch({ type: ActionType.EDIT_USER, payload: user });
  };
  const handleEditUser = (index: number) => {
    const selectedUserData = users[index];
    setFormData(selectedUserData);
    setPage(0);
  };

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  return (
    <div className="max-w-sm h-30 rounded overflow-hidden shadow-lg p-2 flex-1">
      {page === 0 && (
        <EditForm
          setPage={setPage}
          setFormData={setFormData}
          handleSaveUser={handleSaveUser}
          data={data}
          inputs={FIRST_STEP_INPUTS}
        />
      )}
      {page === 1 && (
        <FirstStepForm
          handleNextPage={handleNextPage}
          inputs={FIRST_STEP_INPUTS}
          data={data}
          setData={setFormData}
        />
      )}
      {page === 2 && (
        <SecondStepForm
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          inputs={SECOND_STEP_INPUTS}
          data={data}
          setData={setFormData}
        />
      )}
      {page === 3 && (
        <Summary
          handlePrevPage={handlePrevPage}
          setPage={setPage}
          handleAddUser={handleAddUser}
          setFormData={setFormData}
          data={data}
        />
      )}
      {users.length > 0 && (
        <UsersList
          handleRemoveUser={handleRemoveUser}
          handleEditUser={handleEditUser}
          usersList={users}
        />
      )}
    </div>
  );
};
