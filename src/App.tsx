import { Outlet } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Providers
import { AppProvider } from "./context/mui/AppContext";
import { SnackbarProvider } from './context/snackbar/SnackbarContext';
import { ToolbarProvider } from "./context/toolbar/ToolbarContext";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function App() {

    return (
        <AppProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ToolbarProvider>
                    <SnackbarProvider>
                        <Outlet />
                    </SnackbarProvider>
                </ToolbarProvider>
            </LocalizationProvider>
        </AppProvider>
    )
}