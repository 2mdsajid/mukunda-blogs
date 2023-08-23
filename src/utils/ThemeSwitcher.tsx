'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <div className="p-1 h-[2rem] w-[2rem] flex justify-center items-center border border-black dark:border-white rounded-full"> {theme === 'dark' ?
        <button className="text-3xl" onClick={() => setTheme("light")}>
          <HiSun />
        </button> :
        <button className="text-3xl" onClick={() => setTheme("dark")}>
          <HiMoon />
        </button>}
      </div>
  );
};

export default ThemeSwitcher;
