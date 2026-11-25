//Part1
// import { createContext, useContext } from "react";

// export const AppContext=createContext();

// export function useAppContext(){

//     return useContext(AppContext);

// }

// export default useAppContext;

//part2

import { createContext, useContext } from "react";

export const ThemeContext=createContext();

export function useThemeContext(){

    return useContext(ThemeContext);

}

export default useThemeContext;