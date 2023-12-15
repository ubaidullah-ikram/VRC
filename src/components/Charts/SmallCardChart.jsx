import { AreaChart, Area } from 'recharts';

import { CardContent, Paper, Typography, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  textContainer: {
    marginLeft: '20px',
  },
  upperText: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'black',
  },
  lowerText: {
    fontSize: '0.9em',
    color: 'black',
  },
});

const SmallCardChart = ({ heading, text, strokeColor, fillColor }) => {
  const [width, setWidth] = useState(423);
  const data = [
    { name: 'a', value: 500 },
    { name: 'b', value: 300 },
    { name: 'c', value: 400 },
    { name: 'd', value: 700 },
    { name: 'e', value: 600 },
    { name: 'f', value: 900 },
    { name: 'g', value: 800 },
    { name: 'h', value: 500 },
    { name: 'i', value: 400 },
    { name: 'j', value: 500 },
    { name: 'k', value: 900 },
    { name: 'l', value: 600 },
    { name: 'm', value: 300 },
    { name: 'n', value: 900 },
    { name: 'o', value: 500 },
    { name: 'p', value: 700 },
    { name: 'q', value: 200 },
    { name: 'r', value: 800 },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1320) {
        setWidth(422);
      }
      if (window.innerWidth <= 1320 && window.innerWidth >= 1080) {
        setWidth(380);
      }
      if (window.innerWidth <= 1080 && window.innerWidth >= 960) {
        setWidth(300);
      }
      if (window.innerWidth <= 960 && window.innerWidth >= 720) {
        setWidth(240);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <div className={classes.textContainer}>
        <CardContent style={{ paddingBottom: '0' }}>
          <Typography variant="h5" className={classes.upperText}>
            ${heading}
          </Typography>
          <Typography variant="body2" className={classes.lowerText}>
            {text}
          </Typography>
        </CardContent>
      </div>
      <AreaChart data={data} width={width} height={100} margin={0}>
        <Area
          dataKey="value"
          stroke={strokeColor}
          fill={fillColor}
          isAnimationActive={false}
          strokeWidth={3}
        />
      </AreaChart>
    </Paper>
  );
};

export default SmallCardChart;
