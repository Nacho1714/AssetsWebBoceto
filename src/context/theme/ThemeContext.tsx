import { createContext, useContext, ReactNode } from "react";

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

import { ThemeModeContext } from "../../interface/theme";
import { themeSettings } from "../../theme";

// Context
const ThemeContext = createContext<ThemeModeContext>({} as ThemeModeContext)

// Provider
export const ThemeProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    const theme = createTheme(themeSettings())

    return (
        <ThemeContext.Provider value={{ theme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}

// Use
export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) throw new Error('ThemeContext is not provided');

    return context;
};