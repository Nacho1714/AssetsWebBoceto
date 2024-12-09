import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";

export interface CustomToolbarProps {
    titleButton?: string;
}

// export default function CustomToolbar({ props }: { props: CustomToolbarProps }) {
export default function CustomToolbarOther(props: CustomToolbarProps) {

    const { titleButton = "Registrar" } = props


    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                aria-label="add"
            >
                {titleButton}
            </Button>
        </>
    )
}