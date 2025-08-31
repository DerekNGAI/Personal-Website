import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add or remove 'dark' class on <html> based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Runs whenever isDarkMode changes
  return { isDarkMode, setIsDarkMode };
};

export default useTheme;
