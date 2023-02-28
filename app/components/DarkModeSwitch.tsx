"use client"
import React, { useEffect, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme} from 'next-themes';


type Props = {}

const DarkModeSwitch = (props: Props) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className='' >
     {mounted &&
        (currentTheme === "dark" ? (
          <LightModeIcon
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <DarkModeIcon
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  )
}

export default DarkModeSwitch