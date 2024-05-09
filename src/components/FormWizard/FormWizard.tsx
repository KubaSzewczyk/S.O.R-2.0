import {
  FirstStepForm,
  SecondStepForm,
  Summary,
  UsersList,
  EditForm,
} from "./components";

import { useFormWizardLogic } from "./components/useFormWizardLogic";

export const FormWizard = () => {
  const {
    FIRST_STEP_INPUTS,
    SECOND_STEP_INPUTS,
    page,
    data,
    users,
    setPage,
    setFormData,
    handleAddUser,
    handleEditUser,
    handleNextPage,
    handlePrevPage,
    handleRemoveUser,
    handleSaveUser,
  } = useFormWizardLogic();

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

      <UsersList
        handleRemoveUser={handleRemoveUser}
        handleEditUser={handleEditUser}
        usersList={users}
      />
    </div>
  );
};
