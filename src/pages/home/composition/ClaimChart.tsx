import { Grid2 as Grid } from "@mui/material";

// Cards
import { CustomCard } from "../../../components/cards";

// Graficos
import { CustomBarVertical, CustomLine, CustomBar } from "../../../components/charts";

// Data
import { ChartOfPlacedOrders, MonthlyOrderChart, WeeklyOrderChart } from "../../../data/charts/graphicHomeData";

export default function ClaimChart() {
    return (
        <Grid container columns={{ md: 3 }} spacing={2}>

            <Grid size={{ md: 1 }} direction={"column"}>
                <CustomCard
                    props={{
                        title: "Pedidos realizados",
                        description: "De los 300 pedidos totales, se han realizado 200",
                        graphic: <CustomBarVertical metadata={ChartOfPlacedOrders} />,
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }
                    }}
                />
            </Grid>

            <Grid container columns={{ md: 1 }} size={{ md: 1 }} spacing={2}>
                <Grid size={{ md: 1 }}>
                    <CustomCard
                        props={{
                            title: "Pedidos Mensuales",
                            description: "Los Pedidos aumentaron un 20% este mes",
                            graphic: <CustomLine metadata={MonthlyOrderChart} />,
                        }}
                    />
                </Grid>
                <Grid size={{ md: 1 }}>
                    <CustomCard
                        props={{
                            title: "Pedidos Semanales",
                            description: "Los Pedidos aumentaron un 15% esta semana",
                            graphic: <CustomBar metadata={WeeklyOrderChart} />,
                        }}
                    />
                </Grid>
            </Grid>

            <Grid size={{ md: 1 }}>
                <Grid container columns={{ md: 1 }} spacing={2}>
                    <Grid size={{ md: 1 }}>
                        <CustomCard
                            props={{
                                title: "Pedidos Mensuales",
                                description: "Los Pedidos aumentaron un 20% este mes",
                                graphic: <CustomLine metadata={MonthlyOrderChart} />,
                            }}
                        />
                    </Grid>
                    <Grid size={{ md: 1 }}>
                        <CustomCard
                            props={{
                                title: "Pedidos Semanales",
                                description: "Los Pedidos aumentaron un 15% esta semana",
                                graphic: <CustomBar metadata={WeeklyOrderChart} />,
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}