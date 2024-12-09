import { Grid2 as Grid } from "@mui/material";

// Card
import { CardPerformance, CardProfessional, CustomCard, CardCompany } from "../../../component/card";

// Calendar
import { DateCalendar } from "../../../component/calendar";

// Data
import { people } from "../../../data/card/cardDetailPerson"
import { cardsStatistics } from "../../../data/card/cardStatistics"
import { CustomBar } from "../../../component/chart";
import { WeeklyOrderChart } from "../../../data/chart/graphicHomeData";

export default function ProfessionalComposition() {

    return (
        
        <Grid container size={{ md: 1 }} columns={{ md: 3 }} spacing={1}>

            <Grid size={{ md: 1 }}>
                <CardProfessional
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
                        <Grid size={{ md: 1 }} key={index}>
                            <CardPerformance
                                key={index}
                                props={{
                                    title: card?.title,
                                    icon: card?.icon,
                                    description: card?.description,
                                    caption: card?.caption,
                                }}
                            />
                        </Grid>
                    ))
                }
            </Grid>

            {/* Gráfico */}
            <Grid size={{ md: 2 }}>
                <CustomCard
                    props={{
                        title: "Pedidos Semanales",
                        description: "Los Pedidos aumentaron un 15% esta semana",
                        graphic: <CustomBar metadata={WeeklyOrderChart} />,
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }
                    }}
                />
            </Grid>

            {/* Card Calendar */}
            <Grid size={{ md: 1 }}>

                <CardCompany
                    props={{
                        title: "Calendario",
                    }}
                >
                    <DateCalendar />
                </CardCompany>

            </Grid>

        </Grid>
    )
}