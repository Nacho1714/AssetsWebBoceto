import React from "react";
import { Card, CardContent, Typography, useTheme, SxProps, Theme, Avatar, Stack } from "@mui/material";

interface CustomCardProps {
    icon: React.ReactNode;
    title: string | undefined;
    caption: string | undefined;
    description: string | undefined;
    sx?: SxProps<Theme>;
}

export default function CardPerformance({ props }: { props: CustomCardProps }) {
    const theme = useTheme(); // Hook para acceder al tema
    const { title = "Indefinido", caption, description, icon, sx } = props

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
                <Stack
                    height={"100%"}
                    justifyContent={"space-between"}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                    >
                        <Stack>
                            <Typography
                                variant="h5"
                            >{title}</Typography>
                            <Typography
                                variant="h6"
                            >{caption}</Typography>
                        </Stack>
                        <Avatar>{icon}</Avatar>
                    </Stack>
                    <Typography
                        variant="subtitle2"
                    >{description}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};