// import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
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
import { Grid, Typography, Autocomplete, TextField } from '@mui/material';
import { findVotesByGov, findVotesByPresident } from '../../api/apiVotos';
import { findAllCandidates, findCandidateById } from '../../api/apiCandidate';



export default function TallyChartComponent() {
  const [data, setData] = useState([
  ]);
  const [dataGov, setDataGov] = useState([
  ]);
  const [stateOptions, setStateOpitions] = useState([
    {uf: 'AC'},
    {uf: 'AL'},
    {uf: 'AP'},
    {uf: 'AM'},
    {uf: 'BA'},
    {uf: 'CE'},
    {uf: 'DF'},
    {uf: 'ES'},
    {uf: 'GO'},
    {uf: 'MA'},
    {uf: 'MT'},
    {uf: 'MS'},
    {uf: 'MG'},
    {uf: 'PA'},
    {uf: 'PB'},
    {uf: 'PR'},
    {uf: 'PE'},
    {uf: 'PI'},
    {uf: 'RJ'},
    {uf: 'RN'},
    {uf: 'RS'},
    {uf: 'RO'},
    {uf: 'RR'},
    {uf: 'SC'},
    {uf: 'SP'},
    {uf: 'SE'},
    {uf: 'TO'},
]);
const [selectedState, setSelectedState] = useState(null);


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
      const response = await findVotesByGov(selectedState.uf);
      setDataGov(response.data);
    }
    try {
      callApiFindVotesByGov();
    } catch (error) {
      console.log(error);
    }
  },[selectedState]);
  const defaultPropsState = {
    options: stateOptions,
    value: selectedState,
    getOptionLabel: (option) => {
        return option?.uf || '';
    },
    getOptionSelected: (option) => {
        return option?.uf || '';
    },
    onChange: (event, newValue) => {
        setSelectedState(newValue);
    },
};
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
        <Typography level="body3" fontWeight="bold">Apuração para Governador - 2º turno</Typography>
        <Autocomplete
                                    {...defaultPropsState}
                                    margin="normal"
                                    id="outlined-select-currency"
                                    variant="outlined"
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Estado"/>
                                    )}
                                />

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
