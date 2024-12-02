import { Outlet } from "react-router-dom";

// Providers
import { AppProvider } from "./context/mui/AppContext";
import { SnackbarProvider } from './context/snackbar/SnackbarContext';
  
export default function App() {

    return (
        <AppProvider>
            <SnackbarProvider>
                <Outlet />
            </SnackbarProvider>
        </AppProvider>
    )
}