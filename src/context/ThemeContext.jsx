import { createContext, useState, useEffect, useMemo } from "react";
import { useCallback } from "react";

const ThemeContext = createContext();
export function ThemeProvider({ children}){
    const [theme, setTheme] = useState(()=> {
     return localStorage.getItem("theme") || "light";}
    );
    const toggleTheme = useCallback(() => {
  setTheme(currentTheme =>
    currentTheme === "light" ? "dark" : "light"
  );
}, []);
    useEffect(()=>{
      localStorage.setItem("theme", theme)
    }, [theme]
    );
    const value = useMemo(() => {
  return {
    theme,
    toggleTheme,
  };
}, [theme, toggleTheme]);
    return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
}
export default ThemeContext;