import { useState } from "react";

import { FirstStepForm, SecondStepForm, Summary } from "./components";

const FIRST_STEP_INPUTS = {
  name: "Name",
  lastName: "Last name",
};

const SECOND_STEP_INPUTS = {
  birthDate: "Birth date",
  hobby: "Hobby",
};

export const FormWizard = () => {
  const [page, setPage] = useState(1);
  const [data, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    hobby: "",
  });

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

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
      {page === 3 && <Summary handlePrevPage={handlePrevPage} data={data} />}
    </div>
  );
};
