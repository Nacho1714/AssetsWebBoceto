import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

// Material UI
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Interfaces
import { SnackbarContextProps, SnackbarSeverity, SnackbarState } from '../../interface/snackbar';


// TODO: tipado

// Context
const SnackbarContext = createContext<SnackbarContextProps | null>(null);

// Provider
export const SnackbarProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // Para controlar el estado del snackbar
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'error',
    });

    // Función para mostrar el snackbar
    const showSnackbar = useCallback((message: string, severity: SnackbarSeverity = 'error') => {
        setSnackbar({ open: true, message, severity });
    }, []);

    // Función para cerrar el snackbar
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason !== 'clickaway') setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
        {children}
        <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
            </Alert>
        </Snackbar>
        </SnackbarContext.Provider>
    );
};

// Use
export const useSnackbar = (): SnackbarContextProps => {
    const context = useContext(SnackbarContext);
    if (!context)  throw new Error('SnackbarContext is not provided');
    return context;
};