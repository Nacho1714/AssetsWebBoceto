import { Grid2 as Grid, Typography, Stack, Divider } from "@mui/material";

// Data
import { cardsData } from "../../../data/card/cardHomeData";

// Icons
import Icons from "../../../icon"

// Card
import { CardCompany } from '../../../component/card';

// Chart
import { ChartContainer } from '../../../component/chart';

export default function CompanyComposition() {

    return (
        <Grid container size={{ md: 1 }} columns={{ md: 3 }} spacing={3}>
            {cardsData.map((data, index) => (

                <Grid key={index} size={{ md: 1 }}>
                    <CardCompany
                        props={{
                            icon: Icons.Business,
                            title: data.title,
                            growth: data.growth,
                            graphic: <ChartContainer metadata={{ growthColor: data.growthColor, sparklineData: data.sparklineData }}/>
                        }}
                    >
                        <Stack
                            spacing={1}
                            divider={<Divider orientation="horizontal" flexItem />}
                        >
                            <Stack direction={'row'} spacing={1} sx={{ alignItems: "center" }}>
                                {Icons.CalendarToday}
                                <Typography
                                    variant="body2"
                                >{data.date}</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={1} sx={{ alignItems: "center" }}>
                                {Icons.LocationOn}
                                <Typography
                                    variant="body2"
                                >{data.location}</Typography>
                            </Stack>
                        </Stack>
                    </CardCompany>
                </Grid>
            ))}
        </Grid>
    )
}