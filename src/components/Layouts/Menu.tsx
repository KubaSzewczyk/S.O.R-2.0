import { NavLink } from "react-router-dom";

import { routes } from "../../routes";

type Props = {
  to: string;
  children: string;
};

const WaNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? "text-red-700" : isPending ? "text-yellow" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul className="flex">
          <li className="mr-2">
            <WaNavLink to={routes.HOME.path}>Home</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.COUNTER.path}>Counter</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.COMPONENT_GENERATOR.path}>
              Component Generator
            </WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.FORM_WIZARD.path}>Form Wizard</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.GENERATOR.path}>Generator</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.THEME_REPRESENTATIVE.path}>Theme</WaNavLink>
          </li>
          <li className="mr-2">
            <WaNavLink to={routes.STEPPER.path}>Stepper</WaNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
