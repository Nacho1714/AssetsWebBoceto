import { Avatar, Card, CardContent, Grid2 as Grid, Stack, SxProps, Theme, useTheme, Typography, Icon, Box } from "@mui/material";

interface CustomCardProps {
    icon: React.ReactNode;
    title: string | undefined;
    caption: string;
    total: number;
    change: string;
    /* value: number; */
    /* description: string; */
    sx?: SxProps<Theme>;
}

export default function CardSummary({ props }: { props: CustomCardProps }) {
    const theme = useTheme();
    const { icon, title = "Indefinido", caption, total, change, sx } = props

    return (
        <Card
            sx={{
                boxShadow: theme.shadows[3], // Sombra según el tema
                borderRadius: theme.shape.borderRadius, // Borde redondeado basado en el tema
                bgcolor: theme.palette.background.paper, // Color de fondo del tema
                ...sx, // Sobrescribir estilos si es necesario
            }}
        >
            {/* Contenido */}
            <CardContent
                sx={{
                    height: "100%"
                }}
            >

                {/* <Stack>
                    <Stack>
                        <Stack
                        
                        >
                            <Avatar>{icon}</Avatar>
                            <Typography
                                variant="h5"
                            >{title}</Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant="h5"
                            >{caption}</Typography>
                            <Typography
                                variant="h5"
                            >{total}</Typography>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Stack>
                            <Typography
                                variant="h5"
                            >{change}</Typography>
                            <Typography
                                variant="h5"
                            >Sobre el último mes</Typography>
                        </Stack>
                    </Stack>

                </Stack> */}

                <Grid container columns={{ md: 3 }} spacing={2}>

                    <Grid size={{ md: 2 }}>
                        <Stack
                            direction={"row"}
                            spacing={1}
                            alignItems={"center"}
                        >
                            <Box
                                sx={{ 
                                    backgroundColor: theme.palette.secondary.main,
                                    borderRadius: '10px',
                                    padding: 2,
                                }}
                            >
                                <Icon
                                    color="primary"
                                >{icon}</Icon>
                            </Box>
                            <Typography
                                variant="h5"
                            >{title}</Typography>
                        </Stack>
                    </Grid>
                    <Grid 
                        container
                        size={{ md: 1 }}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Typography
                            variant="h4"
                            >{total}</Typography>
                    </Grid>
                    <Grid
                        size={{ md: 3 }}
                        sx={{
                            '--Grid-borderWidth': '1px',
                            borderTop: 'var(--Grid-borderWidth) solid',
                            borderColor: `${theme.palette.grey.A400}`,
                        }}
                        pt={2}
                    >
                        <Stack
                            direction={"row"}
                            spacing={1}
                        >
                            <Typography
                                component="span"
                                variant="overline"
                                color="success"
                                fontWeight={theme.typography.fontWeightBold}
                                fontSize={15}
                                >{change}</Typography>
                            <Typography
                                fontSize={15}
                                variant="overline"
                                color="textDisabled"
                            >Sobre el último mes</Typography>
                        </Stack>
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
    )
}