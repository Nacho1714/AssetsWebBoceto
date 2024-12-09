import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

export interface InfoCardProps {
    growthColor: string;
    sparklineData: number[]; // Array of growth data for the sparkline
}

export default function ChartContainer({ metadata }: { metadata: InfoCardProps }) {

    const { growthColor, sparklineData } = metadata

    return (
        <ResponsiveContainer>
            <LineChart
                data={sparklineData.map(value => ({ value }))}
                // margin={{ bottom:0 }}
            >
                <CartesianGrid strokeDasharray="15 1" />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke={growthColor}
                    strokeWidth={2}
                    dot={false} 
                />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}