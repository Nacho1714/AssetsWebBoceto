import { useEffect } from "react";
import { useToolbar } from "../../context/toolbar/ToolbarContext";

// Material UI
import { Grid2 as Grid } from "@mui/material";

// Card
import CardSummary from "../../component/card/CardSummary";

// Form
import RegisterCompany from "../../component/form/composition/RegisterCompany";

// Data
import { cardSummaryData } from "../../data/card/cardCompany";

export default function Company() {
    const { setToolbarProps } = useToolbar<"register">(); // Sin genérico

    useEffect(() => {
        setToolbarProps({
            titleButton: "Registrar",
            titleDialog: "Registrar Empresa",
            FormComponent: RegisterCompany,
        });
    }, []);

    return (

        // Tarjetas
        <Grid container columns={{ md:3 }} spacing={3}>
            {
                cardSummaryData.map((data, index) => (
                    <Grid size={{ md: 1 }} key={index}>
                        <CardSummary 
                            key={index}
                            props={{ 
                                title: data.title,
                                caption: data.caption,
                                change: data.change,
                                icon: data.icon,
                                total: data.total,
                            }}
                        />
                    </Grid>
                ))
            }

            <Grid size={{ md: 3 }}>
            
            </Grid>

        </Grid>

    );
}