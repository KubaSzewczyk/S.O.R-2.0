import { FirstStepForm, SecondStepForm, Summary } from "./components";
import { Button } from "../../ui";

import { useFormWizardLogic } from "./components/useFormWizardLogic";

export const FormWizard = () => {
  const {
    FIRST_STEP_INPUTS,
    SECOND_STEP_INPUTS,
    page,
    data,
    users,
    setPage,
    navigate,
    setFormData,
    handleAddUser,
    handleNextPage,
    handlePrevPage,
  } = useFormWizardLogic();

  return (
    <div className="max-w-sm h-30 rounded overflow-hidden shadow-lg p-2 flex-1">
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
        <Button
          label="lista uzytkowników"
          onClick={() => navigate("/users-list")}
        />
      )}
    </div>
  );
};
