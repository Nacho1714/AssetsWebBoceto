import { useState } from "react";
import { Divider, Grid2 as Grid, Stack } from "@mui/material";

// Buttons
import { ButtonPrimary } from "../../component/button";

// Composition
import { ClaimComposition, CompanyComposition, OrderComposition, PatientComposition, ProfessionalComposition, TreatmentComposition } from './composition'

// Nota Mental: Cuando el componente se esta exportando como "export default ..." si hacer archivo barril, si es un "export ..." no hacer archivo barril y apuntar directamente al archivo

const views = {
    order: 'Pedidos',
    claim: 'Reclamos',
    company: 'Empresa',
    treatment: 'Prestaciones',
    professional: 'Profesionales',
    patient: 'Pacientes'
}

export default function Home() {

    const [selectedComposition, setSelectedComposition] = useState<string>(views.professional);

    const composition = () => {
        switch (selectedComposition) {
            case views.claim:
                return <ClaimComposition />
            case views.company:
                return <CompanyComposition />
            case views.order:
                return <OrderComposition />
            case views.patient:
                return <PatientComposition />
            case views.professional:
                return <ProfessionalComposition />
            case views.treatment:
                return <TreatmentComposition />
        }
    };

    return (

        <>
            <Stack
                direction={"row"}
                spacing={3}
                divider={<Divider orientation="vertical" flexItem />}
                mb={5}
            >
                {
                    Object.values(views).map((view, index) => (
                        <ButtonPrimary
                            key={index}
                            label={view}
                            onClick={() => setSelectedComposition(view)}
                        />
                    ))
                }
            </Stack>

            {/* Composition */}
            <Grid container columns={{ md: 1 }}>
                {composition()}
            </Grid>
        </>
    );
}
