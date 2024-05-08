import { UserData } from "../types";

import { RemoveUser, EditIcon } from "../Icons/";
import { Text } from "../../../ui";

interface Props {
  usersList: UserData[];
  handleRemoveUser: (user: UserData) => void;
  handleEditUser: (index: number) => void;
}

export const UsersList = ({
  usersList,
  handleRemoveUser,
  handleEditUser,
}: Props) => {
  return (
    <>
      <div className="mt-4">
        <h2>Lista uzytkowników:</h2>
        {usersList.map((user: UserData, index) => {
          const { name, lastName } = user;
          return (
            <div key={user.name} className="flex items-center justify-center">
              <Text className="mr-2">
                {name} {lastName}
              </Text>
              <RemoveUser onClick={() => handleRemoveUser(user)} />
              <div className="mr-2" />
              <EditIcon onClick={() => handleEditUser(index)} />
            </div>
          );
        })}
      </div>
    </>
  );
};
