import { ChartBarProps } from '../../interface/component/chart/chart-home-interface';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

import { Typography, Stack, Grid2 as Grid } from '@mui/material';
import { Circle } from '@mui/icons-material';

import { useTheme } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function CustomBarVertical({ metadata }: { metadata: ChartBarProps }): JSX.Element {

    const theme = useTheme(); // Acceso al tema
    const { labels, dataPoints, maxDataPoints } = metadata;

    // Configuración de datos para las barras de color
    const data = {
        labels: labels, // Nombres de los días en el eje y
        datasets: [
            {
                label: 'Pedidos Realizados por mes',
                data: dataPoints,
                backgroundColor: theme.palette.primary.main, // Naranja para pedidos realizados
            },
            {
                label: 'Pedidos Restantes por mes',
                data: maxDataPoints ? maxDataPoints.map((max, i) => max - dataPoints[i]) : [],
                backgroundColor: theme.palette.secondary.main, // Verde para el total de pedidos restantes
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        indexAxis: 'y' as const, // Cambia el gráfico a horizontal
        responsive: true,
        maintainAspectRatio: false, // Permitir cambiar el tamaño según el contenedor
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: theme.palette.text.primary },
            },
            x: {
                ticks: { color: theme.palette.text.primary },
            },
        },
    };

    return (
        <Grid container columns={{ md: 1 }} sx={{ height: '100%' }}>

            <Grid container size={{ md: 1 }} columns={{ md: 2 }} >

                <Grid size={{ md: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Circle
                            sx={{
                                color: theme.palette.primary.main,
                                fontSize: theme.typography.fontSize
                            }}
                        />
                        <Typography variant="body2">Pedidos Realizados por mes</Typography>
                    </Stack>
                </Grid>

                <Grid size={{ md: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center" >
                        <Circle
                            sx={{
                                color: theme.palette.secondary.main,
                                fontSize: theme.typography.fontSize
                            }} />
                        <Typography variant="body2">Pedidos Restantes por mes</Typography>
                    </Stack>
                </Grid>

            </Grid>

            <Grid 
                size={{ md: 1 }} 
            >
                <Bar
                    data={data}
                    options={options}
                />
            </Grid>

        </Grid>
    );
}
