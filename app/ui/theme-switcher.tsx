"use client";

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Button} from "@nextui-org/react";

export default function ThemeSwitcher() {
   const [mounted, setMounted] = useState(false);
   const {theme, setTheme} = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return (
      <div>
         <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Dark" : "Light"} Mode
         </Button>
      </div>
   );
}
