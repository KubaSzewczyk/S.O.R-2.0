import "./App.css";
// import { RegistrationFormRefsHookForm, RegistrationFormState, RegistrationFormRefs } from "./components/RegistrationForm";
// import { ComponentGenerator } from "./components/ComponentGenerator";
// import { FormWizard } from "./components/FormWizard";
// import { DynamicFieldsForm } from "./components/DynamicFieldsForm";
// import { SortedObj } from "./components/SortedObj";
import { ThemeRepresentative } from "./components/Theme";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      {/* <RegistrationFormState /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <RegistrationFormRefsHookForm /> */}
      {/* <ComponentGenerator /> */}
      {/* <FormWizard /> */}
      {/* <DynamicFieldsForm /> */}
      {/* <SortedObj /> */}
      <ThemeContextProvider>
        <ThemeRepresentative />
      </ThemeContextProvider>
    </>
  );
}

export default App;
