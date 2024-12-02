import { ChartProps } from '../../interface/components/charts/chart-home-interface';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

import { useTheme } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function CustomBar({ metadata }: { metadata: ChartProps }): JSX.Element {

    const theme = useTheme(); // Acceso al tema
    const { labels, dataPoints } = metadata;

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataPoints,
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.light,
                pointBackgroundColor: theme.palette.primary.main,
                pointBorderColor: theme.palette.primary.main,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
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

    return <Bar data={data} options={options} />
}
