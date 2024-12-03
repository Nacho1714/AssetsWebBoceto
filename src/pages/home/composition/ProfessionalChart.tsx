import { Box, Divider, Grid2 as Grid, Stack, Typography } from "@mui/material";

// Card
import { CustomCardStatistics, CustomCardProfessional, CustomCard } from "../../../components/cards";

// Data
import { people } from "../../../data/card/cardDetailPerson"
import { cardsStatistics } from "../../../data/card/cardStatistics"
import { CustomBar } from "../../../components/charts";
import { WeeklyOrderChart } from "../../../data/charts/graphicHomeData";

export default function ProfessionalChart() {
    return (
        <Grid
            container 
            columns={{ md: 3 }} 
            spacing={1}
            sx={{
                // backgroundColor: "blue",
            }}
            >

            <Grid size={{ md: 1 }}>
                <CustomCardProfessional
                    people={people}
                    props={{ 
                        title: "Profesionales",
                        sx: { height: '100%' } 
                    }}
                />
            </Grid>

            <Grid container columns={{ md: 3 }} size={{ md: 2 }} spacing={1}>
                {
                    cardsStatistics.map((card, index) => (
                        <Grid size={{ md: 1 }}>
                            <CustomCardStatistics
                                key={index}
                                props={{
                                    title: card?.title,
                                    icon: card?.icon,
                                    description: card?.description,
                                    caption: card?.caption,
                                    // sx: { height: '100%' }
                                }}
                            />
                        </Grid>
                    ))
                }
            </Grid>

            <Grid size={{ md: 2 }} sx={{
                // height: "100%",
                // backgroundColor: "red"
                // flexGrow: 1
            }}>
                <CustomCard
                    props={{
                        title: "Pedidos Semanales",
                        description: "Los Pedidos aumentaron un 15% esta semana",
                        graphic: <CustomBar metadata={WeeklyOrderChart} />,
                        sx: {
                            // height: 388
                        }
                    }}
                />
            </Grid>

            <Grid size={{ md: 1 }}>
                {/* Card Calendar */}
            </Grid>

        </Grid>
    )
}