import { useContext, createContext, useState, ReactNode } from "react";

type ProviderValueType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ProviderValueType);

type ThemeContextProps = {
  children: ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  const value: ProviderValueType = {
    theme,
    toggleTheme,
  };
  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("no context specified...");
  }

  return context;
};

const InternalComponent = () => {
  const { theme, toggleTheme } = useThemeContext();

  const toggleThemeAction = () => {
    toggleTheme();
  };

  return (
    <>
      <button
        className={`${
          theme === "light" ? "bg-black text-white" : "bg-green-950 text-white"
        } rounded-full p-4 mr-4`}
        onClick={() => toggleThemeAction()}
      >
        Toggle Theme
      </button>
      <span>current Theme is {theme}</span>
    </>
  );
};

const ThemeContextExample = () => {
  return (
    <>
      <ThemeContextProvider>
        <InternalComponent />
      </ThemeContextProvider>
    </>
  );
};

export default ThemeContextExample;
