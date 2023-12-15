import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const useStyles = makeStyles({
  card: {
    borderRadius: 20,
    // padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Make the card responsive to its container
    maxWidth: '315px', // Set maximum width as needed
    height: '160px',
  },
  textContainer: {
    marginRight: 'auto',
    margin: 20,
  },
  upperText: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
  },
  lowerText: {
    fontSize: '0.9em',
    color: 'white',
  },
});

const CustomCard = ({ color, text, heading, icon }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ background: color, position: 'relative' }}
    >
      <div className={classes.textContainer}>
        <CardContent style={{ paddingBottom: '80px' }}>
          <Typography variant="h5" className={classes.upperText}>
            {heading}
          </Typography>
          <Typography variant="body2" className={classes.lowerText}>
            {text}
          </Typography>
        </CardContent>
      </div>
      <div style={{ margin: 20 }}>
        {icon ? <img src={icon} alt={icon} /> : ''}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          background: '#c9c5c5',
          width: '100%',
          margin: '20px 0 0 0',
          padding: '4px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        More Info{' '}
        <ArrowCircleRightOutlinedIcon
          style={{ color: 'white', marginLeft: '10px', fontSize: '18px' }}
        />
      </div>
    </Card>
  );
};

export default CustomCard;
