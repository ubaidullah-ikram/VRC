import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Paper, Typography } from '@material-ui/core';

const data = [
  {
    name: 'A',
    expenses: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    expenses: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    expenses: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    expenses: 2780,
    profit: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    expenses: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    expenses: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    expenses: 3490,
    profit: 4300,
    amt: 2100,
  },
  {
    name: 'H',
    expenses: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: 'I',
    expenses: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: 'J',
    expenses: 3490,
    profit: 4300,
    amt: 2100,
  },
];

const BarChartComponent = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h6">Monthly Sales</Typography>
      <BarChart
        width={600}
        height={260}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" stackId="a" fill="#8884d8" barSize={20} />
        <Bar dataKey="expenses" stackId="a" fill="#82ca9d" barSize={20} />
      </BarChart>
    </Paper>
  );
};

export default BarChartComponent;
