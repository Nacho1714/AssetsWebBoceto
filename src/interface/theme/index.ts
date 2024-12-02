import { Theme } from "@mui/material/styles";

export type ThemeMode = "dark" | "light";

export type UseModeReturn = [ThemeModeContext, ColorModeContext];

export interface ColorModeContext {
    toggleColorMode: () => void;
}

export interface ThemeModeContext {
    theme: Theme;
}