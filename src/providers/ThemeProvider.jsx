import { useState } from "react";
import { ThemeContext } from "../context";

// checking OS preference
// let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  // const [theme, setTheme] = useState(isDarkMode ? "dark" : "light");

  const changeTheme = (event) => {
    const nextTheme = event.target.value === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div data-theme={theme} data-mode={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
