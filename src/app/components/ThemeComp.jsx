"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeComp = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:bg-blue-700 dark:text-white min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeComp;
