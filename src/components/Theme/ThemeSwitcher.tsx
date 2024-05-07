import { Theme } from "../../context/ThemeContext";
import { useThemeContext } from "../../hooks/useThemeContext";
import { Select } from "../../ui";

export const ThemeSwitcher = () => {
  const { themeInfo, themeData, changeTheme } = useThemeContext();

  const handleThemeChange = (newTheme: Theme) => {
    changeTheme(newTheme);
  };

  const themeOptions: Theme[] = Object.keys(themeData) as Theme[];

  return (
    <Select
      onChange={handleThemeChange}
      value={themeInfo.name}
      data={themeOptions}
    />
  );
};
