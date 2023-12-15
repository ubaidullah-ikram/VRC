import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { Paper, Typography } from '@material-ui/core';

const data = [
  { name: 'Clothing', value: 400 },
  { name: 'Food Products', value: 300 },
  { name: 'Electronics', value: 300 },
  { name: 'Kitchen Utility', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AreaChartComponent = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h6">Deparmental Sales</Typography>
      <PieChart height={260} width={600}>
        <Pie
          data={data}
          cx={200}
          cy={220}
          startAngle={180}
          endAngle={0}
          innerRadius={180}
          outerRadius={200}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="left"
          verticalAlign="middle"
          iconType="square"
          payload={data.map((entry, index) => ({
            value: `${entry.name} (${entry.value})`,
            type: 'square',
            color: COLORS[index % COLORS.length],
          }))}
        />
      </PieChart>
    </Paper>
  );
};

export default AreaChartComponent;
