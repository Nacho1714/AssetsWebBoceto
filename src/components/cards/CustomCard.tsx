import React from "react";
import { Card, CardContent, CardActions, CardMedia, Typography, Button, useTheme, SxProps, Theme, Box } from "@mui/material";

interface CustomCardProps {
    title: string;
    description?: string;
    image?: string;
    graphic?: React.ReactNode;
    actions?: React.ReactNode;
    onActionClick?: () => void;
    actionLabel?: string;
    sx?: SxProps<Theme>;
}

export default function CustomCard({props} : {props: CustomCardProps}) {
    const theme = useTheme(); // Hook para acceder al tema
    const { title, actionLabel, actions, description, graphic, image, onActionClick, sx } = props

    return (
        <Card
            sx={{
                boxShadow: theme.shadows[3], // Sombra según el tema
                borderRadius: theme.shape.borderRadius, // Borde redondeado basado en el tema
                bgcolor: theme.palette.background.paper, // Color de fondo del tema
                ...sx, // Sobrescribir estilos si es necesario
            }}
        >
            {/* Imagen opcional */}
            {image && (
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={`${title} image`}
                />
            )}

            {/* Contenido gráfico opcional */}
            {graphic && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                        p: 2, // Espaciado
                    }}
                >
                    {graphic}
                </Box>
            )}

            {/* Contenido */}
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: theme.palette.text.primary, // Color del texto basado en el tema
                        fontWeight: theme.typography.fontWeightBold, // Negrita desde el tema
                    }}
                >
                    {title}
                </Typography>

                {description && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary, // Texto secundario del tema
                            mt: 1, // Margen superior
                        }}
                    >
                        {description}
                    </Typography>
                )}
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