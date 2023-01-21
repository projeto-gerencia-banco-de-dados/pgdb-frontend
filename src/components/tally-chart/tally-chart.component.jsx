import React, { PureComponent } from 'react';
import { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function TallyChartComponent () {
    const [data, setData] = useState([
        { candidate: 'Lula', value: 400 },
        { candidate: 'Bolsonaro', value: 300 },
    ]);
    return (
        <>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={80}
                    cy={80}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    nameKey="candidate"
                    dataKey="value"
                >
                    {data.map((curr, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill={
                                curr.name === 'Group A' ? COLORS[0]: COLORS[1]
                            } 
                        />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </>
    );
}
