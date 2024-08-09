import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

const config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
   },
   darkMode: "class",
   plugins: [
      nextui({
         themes: {
            light: {
               colors: {
                  background: "#f8fafc",
               },
            },
            dark: {
               colors: {
                  background: "#0e0e11",
                  content1: "#000",
               },
            },
         },
      }),
   ],
};
export default config;
