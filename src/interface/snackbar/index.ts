export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export interface SnackbarContextProps {
    showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

export interface SnackbarState {
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
}