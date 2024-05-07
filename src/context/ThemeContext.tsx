import { createContext, useState } from "react";

export enum Theme {
  GERMANY = "germany",
  FRANCE = "france",
  MEXICO = "mexico",
}

type Colors = {
  [key: string]: string;
};

export type ThemeInfo = {
  name: Theme;
  flagPath: string;
  colors: Colors;
};

type ThemeContextType = {
  themeInfo: ThemeInfo;
  changeTheme: (newTheme: Theme) => void;
  themeData: { [key in Theme]: ThemeInfo };
};

const themeData: { [key in Theme]: ThemeInfo } = {
  [Theme.GERMANY]: {
    name: Theme.GERMANY,
    flagPath: "/src/components/Theme/flags/germany-flag.png",
    colors: {
      primary: "#000000",
      secondary: "#DD0000",
      background: "#FFCC00",
    },
  },
  [Theme.FRANCE]: {
    name: Theme.FRANCE,
    flagPath: "/src/components/Theme/flags/flag-of-france.png",
    colors: {
      primary: "#002654",
      secondary: "#ED2939",
      background: "#FFFFFF",
    },
  },
  [Theme.MEXICO]: {
    name: Theme.MEXICO,
    flagPath: "/src/components/Theme/flags/flag-of-mexico.png",
    colors: {
      primary: "#006341",
      secondary: "#C8102E",
      background: "#FFFFFF",
    },
  },
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeInfo, setThemeInfo] = useState<ThemeInfo>(themeData.mexico);

  const changeTheme = (newTheme: Theme) => {
    setThemeInfo(themeData[newTheme]);
  };

  return (
    <ThemeContext.Provider value={{ themeInfo, changeTheme, themeData }}>
      {children}
    </ThemeContext.Provider>
  );
};
