import { Text } from "../../../ui";
import { RemoveUser, EditIcon } from "../Icons/";

import { useFormWizardLogic } from "./useFormWizardLogic";

import type { UserData } from "../types";

export const UsersList = () => {
  const { users, handleRemoveUser, handleEditUser } = useFormWizardLogic();
  return (
    <>
      <div className="mt-4">
        <h2>Lista uzytkowników:</h2>
        {users.map((user: UserData, index) => {
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
