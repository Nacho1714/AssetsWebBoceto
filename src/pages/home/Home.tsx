import { useState } from "react";
import { Grid2 as Grid } from "@mui/material";

// Buttons
import { ButtonPrimary } from "../../components/buttons";

// Graficos
import { ClaimChart, CompanyChart, OrderChart, PatientChart, ProfessionalChart, TreatmentChart} from './composition'

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

    const [selectedChart, setSelectedChart] = useState<string>(views.professional);

    const chart = () => {
        switch (selectedChart) {
            case views.claim:
                return <ClaimChart/>
            case views.company:
                return <CompanyChart /> 
            case views.order:
                return <OrderChart /> 
            case views.patient:
                return <PatientChart /> 
            case views.professional:
                return <ProfessionalChart /> 
            case views.treatment:
                return <TreatmentChart /> 
        }
    };

    return (
        <Grid container columns={{ md: 1 }} spacing={8}>

            {/* Botones */}
            <Grid size={{ md: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 6 }}>
                    {
                        Object.values(views).map((view, index) => (
                            <Grid
                                key={index}
                                size={{ xs: 1, sm: 1, md: 1 }}
                            >
                                <ButtonPrimary
                                    key={index}
                                    label={view}
                                    onClick={() => setSelectedChart(view)}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            {/* Gráficos */}
            <Grid size={{ md: 1 }} >
                {chart()}
            </Grid>

        </Grid>
    );
}
