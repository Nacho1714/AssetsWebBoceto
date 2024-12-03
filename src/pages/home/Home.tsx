import { useState } from "react";
import { Box, Grid2 as Grid } from "@mui/material";

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

        <Box
            sx={{
                height: '80vh', // Contenedor principal ocupa toda la ventana
                overflow: 'hidden', // Evita scroll vertical  
                backgroundColor: "cadetblue",
            }}
        >

            <Grid 
                container 
                columns={{ md: 1 }} 
                spacing={8}
                sx={{
                    backgroundColor: "brown",
                    maxHeight: "100%",
                }}
                >

                {/* Botones */}
                <Grid 
                    container 
                    size={{ md: 1 }} 
                    columns={{ md: 6 }} 
                    spacing={3} 
                >
                    {
                        Object.values(views).map((view, index) => (
                            <Grid
                                key={index}
                                size={{ md: 1 }}
                            >
                                <Box>
                                    <ButtonPrimary
                                        key={index}
                                        label={view}
                                        onClick={() => setSelectedChart(view)}
                                    />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>

                {/* Gráficos */}
                <Grid size={{ md: 1 }} sx={{
                    // height: "100%",
                    // backgroundColor: "violet"
                }}>
                    {chart()}
                </Grid>

            </Grid>

        </Box>

    );
}
