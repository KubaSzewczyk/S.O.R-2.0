import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layouts/Layout";
import { HomePage } from "./components/pages/HomePage";
import { CounterPage } from "./components/pages/CounterPage";
import { ComponentGenerator } from "./components/ComponentGenerator";
import { FormWizardPage } from "./components/pages/FormWizardPage";
import { GeneratorPage } from "./components/pages/GeneratorPage";
import { ThemeRepresentative } from "./components/Theme";
import { Stepper } from "./components/Stepper";
import { EditForm, UsersList } from "./components/FormWizard/components";

export const routes = {
  HOME: {
    path: "/",
  },
  COUNTER: {
    path: "/counter",
  },
  COMPONENT_GENERATOR: {
    path: "/component-generator",
  },
  FORM_WIZARD: {
    path: "/form-wizard",
  },
  GENERATOR: {
    path: "/generator",
  },
  THEME_REPRESENTATIVE: {
    path: "/theme-representative",
  },
  STEPPER: {
    path: "/stepper",
  },
  EDIT_USER: {
    path: "/edit-user",
  },
  USERS_LIST: {
    path: "/users-list",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.COUNTER.path,
        element: <CounterPage />,
      },
      {
        path: routes.COMPONENT_GENERATOR.path,
        element: <ComponentGenerator />,
      },
      {
        path: routes.FORM_WIZARD.path,
        element: <FormWizardPage />,
      },
      {
        path: routes.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: routes.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: routes.THEME_REPRESENTATIVE.path,
        element: <ThemeRepresentative />,
      },
      {
        path: routes.STEPPER.path,
        element: <Stepper />,
      },
      {
        path: routes.EDIT_USER.path,
        element: <EditForm />,
      },
      {
        path: routes.USERS_LIST.path,
        element: <UsersList />,
      },
    ],
  },
]);
