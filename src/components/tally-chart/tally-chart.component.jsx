// import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default function TallyChartComponent () {
//     const [data, setData] = useState([
//         { candidate: 'Lula', value: 400 },
//         { candidate: 'Bolsonaro', value: 300 },
//     ]);
//     return (
//         <>
//             <PieChart width={400} height={400}>
//                 <Pie
//                     data={data}
//                     cx={80}
//                     cy={80}
//                     labelLine={false}
//                     label={renderCustomizedLabel}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     nameKey="candidate"
//                     dataKey="value"
//                 >
//                     {data.map((curr, index) => (
//                         <Cell 
//                             key={`cell-${index}`} 
//                             fill={
//                                 curr.name === 'Group A' ? COLORS[0]: COLORS[1]
//                             } 
//                         />
//                     ))}
//                 </Pie>
//                 <Tooltip />
//             </PieChart>
//         </>
//     );
// }
// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";
import { Container } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import { findVotesByGov, findVotesByPresident } from '../../api/apiVotos';
import { findAllCandidates, findCandidateById } from '../../api/apiCandidate';



export default function TallyChartComponent() {
  const [data, setData] = useState([
  ]);
  const [dataGov, setDataGov] = useState([
  ]);

  useEffect(()=>{
    const callApiFindVotesByPresident = async()=>{
      const response = await findVotesByPresident();
      console.log(response.data);
      setData(response.data);
    }
    try {
      callApiFindVotesByPresident();
    } catch (error) {
      console.log(error);
    }
  },[]);

  useEffect(()=>{
    const callApiFindVotesByGov = async()=>{
      const response = await findVotesByGov('rs');
      console.log(response.data);
      setDataGov(response.data);
    }
    try {
      callApiFindVotesByGov();
    } catch (error) {
      console.log(error);
    }
  },[]);
  return (
    <><Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}>
      <Typography level="body3" fontWeight="bold">Apuração para Presidente - 2º turno</Typography>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nome" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" minPointSize={10} />
      </BarChart>
    </Grid><Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}>
        <Typography level="body3" fontWeight="bold">Apuração para Governador - 2º turno - RS</Typography>

        <BarChart
          width={500}
          height={300}
          data={dataGov}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </Grid></>
  );
}
