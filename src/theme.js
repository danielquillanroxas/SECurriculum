import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";
import { Palette } from "@mui/icons-material";

export const tokens = (mode) => ({
    ...(mode === "dark"
    ? {
        brownish: {
          100: "#fcf3dd",
          200: "#f9e7bb",
          300: "#f7da99",
          400: "#f4ce77",
          500: "#f1c255",
          600: "#c19b44",
          700: "#917433",
          800: "#604e22",
          900: "#302711"
},
       mustard: {
          100: "#f5efcc",
          200: "#ebe099",
          300: "#e0d066",
          400: "#d6c133",
          500: "#ccb100",
          600: "#a38e00",
          700: "#7a6a00",
          800: "#524700",
          900: "#292300"
},

        brownGrey: {
          100: "#ece7e5",
          200: "#d9cfcb",
          300: "#c6b8b2",
          400: "#b3a098",
          500: "#a0887e",
          600: "#806d65",
          700: "#60524c",
          800: "#403632",
          900: "#201b19"
},
    } : {
        brownish: {
          100: "#302711",
          200: "#604e22",
          300: "#917433",
          400: "#c19b44",
          500: "#f1c255",
          600: "#f4ce77",
          700: "#f7da99",
          800: "#f9e7bb",
          900: "#fcf3dd",
},
       mustard: {
          100: "#292300",
          200: "#524700",
          300: "#7a6a00",
          400: "#a38e00",
          500: "#ccb100",
          600: "#d6c133",
          700: "#e0d066",
          800: "#ebe099",
          900: "#f5efcc",
},

        brownGrey: {
          100: "#201b19",
          200: "#403632",
          300: "#60524c",
          400: "#806d65",
          500: "#a0887e",
          600: "#b3a098",
          700: "#c6b8b2",
          800: "#d9cfcb",
          900: "#ece7e5",
},
    } 
    
    )
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" 
            ? {
                //palletes for dark mode
                primary:{
                    main: colors.brownGrey[100]
                },
                secondary:{
                    main: colors.mustard[500]
                },
                neutral:{
                    dark: colors.mustard[700],
                    main: colors.mustard[500],
                    light: colors.mustard[100]
                },
                background:{
                    default: colors.brownGrey[500]
                }  
            } : {
                //palletes for light mode
                
                    //palletes for dark mode
                    primary:{
                        main: colors.brownGrey[100]
                    },
                    secondary:{
                        main: colors.mustard[500]
                    },
                    neutral:{
                        dark: colors.mustard[700],
                        main: colors.mustard[500],
                        light: colors.mustard[100]
                    },
                    background:{
                        default: "#d4c9c4",
                    }
            }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6:{
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },

    };
};

//context for color mode

export const ColorModeContext = createContext({
    toggleColorMode:() => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () =>({
            toggleColorMode: () =>
                setMode((prev) => (prev==="light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};