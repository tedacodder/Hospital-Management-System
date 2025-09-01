import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("bg-dark", "text-light");
      setDarkMode(true);
    } else {
      document.body.classList.add("bg-light", "text-dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("bg-dark", "text-light");
      document.body.classList.add("bg-light", "text-dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.body.classList.remove("bg-light", "text-dark");
      document.body.classList.add("bg-dark", "text-light");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
