import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiSunDimFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  return (
    <div
      className="relative h-8 w-14 cursor-pointer rounded-full bg-[#ccc] p-1 dark:bg-[#3b3b3b]"
      onClick={handleTheme}
    >
      <button
        className={`dark:text-black ${isActive ? "translate-x-0 from-black" : "translate-x-6 from-white"} flex h-6 w-6 transform items-center justify-center rounded-full  shadow-sm transition-transform duration-500 ease-in-out`}
      >
        {isActive ? <PiSunDimFill size={16} /> : <BiSolidMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
