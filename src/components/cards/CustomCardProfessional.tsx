import React, { useState } from "react";

// Material UI
import { Card, CardContent, CardActions, Typography, Button, useTheme, SxProps, Theme, Grid2 as Grid, Avatar, Stack, IconButton } from "@mui/material";

// Icons
import Icons from "../../icons";

// Interface
import { InfoCardDetailPerson } from "../../interface/components/cards/card-detail-person-interface";

interface CustomCardProps {
    title: string;
    actions?: React.ReactNode;
    onActionClick?: () => void;
    actionLabel?: string;
    sx?: SxProps<Theme>;
}

export default function CustomCardProfessional({ props, people }: { props:CustomCardProps,  people: InfoCardDetailPerson[] }): JSX.Element {

    const theme = useTheme(); // Hook para acceder al tema
    const [currentIndex, setCurrentIndex] = useState(0);
    const { title, actionLabel, actions, onActionClick, sx } = props

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? people.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === people.length - 1 ? 0 : prevIndex + 1));
    };

    const { name, last_name, profession} = people[currentIndex];

    return (
        <Card
            sx={{
                display: 'flex',
                boxShadow: theme.shadows[3], // Sombra según el tema
                borderRadius: theme.shape.borderRadius, // Borde redondeado basado en el tema
                bgcolor: theme.palette.background.paper, // Color de fondo del tema
                ...sx, // Sobrescribir estilos si es necesario
            }}
        >
            {/* Contenido */}
            <CardContent sx={{
                flex: 1,
            }}>
                <Grid container columns={{ md: 1 }} spacing={2} sx={{
                    height: "100%",
                }}>
                    <Grid size={{ md: 1 }}>
                        <Typography variant="h6" align="center">
                            {title}
                        </Typography>
                    </Grid>

                    <Grid size={{ md: 1 }}>
                        <Stack
                            direction="row"
                            // spacing={2}
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <IconButton onClick={handlePrevious}>
                                {Icons.ArrowBackIos}
                            </IconButton>

                            <Avatar
                                sx={{
                                    margin: '0 auto',
                                    mt: 2,
                                }}
                                src='/static/images/avatar/default.jpg'
                            />

                            <IconButton onClick={handleNext}>
                                {Icons.ArrowForwardIos}
                            </IconButton>
                        </Stack>
                    </Grid>

                    <Grid size={{ md: 1 }}>
                        <Stack>
                            <Typography variant="h6" align="center">
                                {name} {last_name}
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary">
                                {profession}
                            </Typography>
                        </Stack>
                    </Grid>
                    
                </Grid>
            </CardContent>

            {/* Acciones */}
            {actions && (
                <CardActions>
                    {actionLabel && onActionClick && (
                        <Button
                            size="small"
                            onClick={onActionClick}
                            sx={{
                                color: theme.palette.primary.main, // Color principal del tema
                            }}
                        >
                            {actionLabel}
                        </Button>
                    )}
                    {actions}
                </CardActions>
            )}

        </Card>
    )
}



