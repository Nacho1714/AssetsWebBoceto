import React from "react";
import { Card, CardContent, CardActions, Typography, Button, useTheme, SxProps, Theme, Grid2 as Grid, Avatar, Stack } from "@mui/material";

interface CustomCardProps {
    icon: React.ReactNode;
    title: string;
    growth?: number;
    graphic?: React.ReactNode;
    actions?: React.ReactNode;
    onActionClick?: () => void;
    actionLabel?: string;
    sx?: SxProps<Theme>;
}


export default function CustomCardCompany({ props, children }: { props: CustomCardProps, children: React.ReactNode }) {
    const theme = useTheme(); // Hook para acceder al tema
    const { title, actionLabel, actions, graphic, growth, icon, onActionClick, sx } = props

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
            <CardContent>
                <Grid container columns={{ md: 1 }} spacing={3}>
                    <Grid size={{ md: 1 }}>
                        <Stack direction="row" spacing={1} alignItems="center" >
                            <Avatar>{icon}</Avatar>
                            <Typography
                                variant="h5"
                            >{title}</Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 1 }}>
                        {children}
                    </Grid>

                    {growth && graphic && (
                        <Grid container columns={{ md: 3 }} size={{ md: 1 }} spacing={1}>
                            {/* Crecimiento */}
                            <Grid container columns={{ md: 2 }} size={{ md: 2 }}
                                sx={{
                                    border: "1px solid",
                                    borderColor: theme.palette.grey[500],
                                    borderRadius: 2,
                                }}
                            >
                                <Grid size={{ md: 1 }}> {graphic} </Grid>
                                <Grid size={{ md: 1 }} >
                                    <Stack>
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                color: theme.palette.grey.A700, // Color del texto basado en el tema
                                                fontWeight: theme.typography.fontWeightBold, // Negrita desde el tema
                                            }}
                                        >Crecimiento</Typography>
                                        <Typography
                                            variant="h5"
                                            // fontSize={28}
                                            component="div"
                                            sx={{
                                                color: theme.palette.success.light, // Color del texto basado en el tema
                                                fontWeight: theme.typography.fontWeightBold, // Negrita desde el tema
                                            }}
                                        >{growth}%</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                            {/* Ganancia */}
                            <Grid size={{ md: 1 }}>
                                <Stack
                                    border={"1px solid"}
                                    borderColor={theme.palette.grey[500]}
                                    borderRadius={2}
                                    paddingLeft={1}
                                >
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: theme.palette.grey.A700, // Color del texto basado en el tema
                                            fontWeight: theme.typography.fontWeightBold, // Negrita desde el tema
                                        }}
                                    >Ganancias</Typography>
                                    <Typography
                                        variant="h5"
                                        // fontSize={28}
                                        component="div"
                                        sx={{
                                            color: theme.palette.text.primary, // Color del texto basado en el tema
                                            fontWeight: theme.typography.fontWeightBold, // Negrita desde el tema
                                        }}
                                    >${growth}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    )}


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
    );
};