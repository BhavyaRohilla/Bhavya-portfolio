import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeContext = createContext<boolean>(true);
const ToggleDarkModeContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("darkMode", true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // wait until client-side
  }, []);

  if (!mounted) {
    // prevent mismatched theme on first SSR render
    return null;
  }

  return (
    <DarkModeContext.Provider value={theme}>
      <ToggleDarkModeContext.Provider value={setTheme}>
        {children}
      </ToggleDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
};

export function useDarkMode() {
  const darkMode = useContext(DarkModeContext);
  if (typeof darkMode === "undefined") {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return darkMode;
}

export function useToggleDarkMode() {
  const toggleDarkMode = useContext(ToggleDarkModeContext);
  if (typeof toggleDarkMode === "undefined") {
    throw new Error(
      "useToggleDarkMode must be used within a ToggleDarkModeProvider"
    );
  }
  const toggle = useCallback(() => {
    toggleDarkMode!((bool) => !bool);
  }, [toggleDarkMode]);
  return toggle;
}
