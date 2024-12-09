import React, { useRef, useState } from "react";

// Material UI
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress, Box } from "@mui/material";

// Formik
import { FormikProps } from "formik";

interface FormComponentProps {
    formRef: React.RefObject<FormikProps<any>>;
}

export interface CustomToolbarProps {
    titleButton?: string;
    titleDialog?: string;
    FormComponent: React.ComponentType<FormComponentProps>;
}

// const DefaultFormComponent: React.FC<FormComponentProps> = () => {
//     return <div>No se ha proporcionado un formulario.</div>;
// };

export default function CustomToolbar(props: CustomToolbarProps) {

    const formRef = useRef<FormikProps<any>>(null);
    const { titleButton = "Registrar", titleDialog = "Registrar", FormComponent } = props

    const [open, setOpen] = useState(false); // Estado para controlar el dialog

    const handleOpen = () => setOpen(true); // Función para abrir el dialog
    const handleClose = () => setOpen(false); // Función para cerrar el dialog

    const handleExternalSubmit = () => {
        if (formRef.current) {
            formRef.current.submitForm(); // Usamos el método de Formik
        }
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                aria-labelledby="dynamic-dialog-title"
                fullWidth
            >
                <DialogTitle id="dynamic-dialog-title">{titleDialog}</DialogTitle>

                <DialogContent>
                    {FormComponent ? (
                        <FormComponent formRef={formRef} />
                    ) : (
                        <Box sx={{
                            textAlign: "center"
                        }}> <CircularProgress /> </Box>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        onClick={handleExternalSubmit}
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <Button
                variant="contained"
                color="secondary"
                aria-label="add"
                onClick={handleOpen}
            >
                {titleButton}
            </Button>
        </>
    )
}