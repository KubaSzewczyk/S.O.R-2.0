import { useThemeContext } from "../../hooks/useThemeContext";
import { Text } from "../../ui";

import { ThemeSwitcher } from "./ThemeSwitcher";

export const ThemeRepresentative = () => {
  const { themeInfo } = useThemeContext();

  return (
    <>
      <div className="flex mb-4">
        <ThemeSwitcher />
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={themeInfo!.flagPath} />
        <div className="px-6 py-4">
          <Text className="text-3xl" themeInfo={themeInfo?.name}>
            {themeInfo!.name}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </Text>
        </div>
      </div>
    </>
  );
};
