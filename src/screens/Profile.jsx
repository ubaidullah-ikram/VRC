import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Header2 from '../components/Nevbar2';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  userBtn: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '10px',
    color: 'white',
    backgroundColor: '#17256e', // Red color for delete button
    '&:hover': {
      color: 'white',
      backgroundColor: '#101c59', // Darker shade of red on hover
    },
    width: 'fit-content',
    padding: '8px 40px',
    boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
    WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
    MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
  },
  updateBtn: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '10px',
    color: 'white',
    backgroundColor: '#17256e', // Red color for delete button
    '&:hover': {
      color: 'white',
      backgroundColor: '#101c59', // Darker shade of red on hover
    },
    width: 'fit-content',
    padding: '8px 140px',
    boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
    WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
    MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
  },
  cancelBtn: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '10px',
    color: '#17256e',
    backgroundColor: '#f2f2f2', // Red color for delete button
    '&:hover': {
      color: 'white',
      backgroundColor: '#101c59', // Darker shade of red on hover
    },
    width: 'fit-content',
    padding: '8px 140px',
    boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
    WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
    MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
  },
  input: {
    borderRadius: '10px',
    padding: '10px',
    width: '100%',
    outline: 'none',
    border: 'none',
    background: '#eee',
    boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
    WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
    MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
  },
}));

export default function User({ setIsLoggedIn }) {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          maxWidth: '85%',
          margin: '110px auto 0',
          padding: '30px 0 0',
        }}
      >
        <div style={{ marginLeft: '5%' }}>
          <h5
            style={{
              color: '#17256e',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: '32px',
            }}
          >
            account info
          </h5>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <Header2 setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div
          style={{
            maxWidth: '90%',
            marginTop: '60px',
            marginBottom: '20px',
            marginLeft: '5%',
            backgroundColor: '#f3f3f3',
            borderRadius: '30px',
            padding: '20px 100px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '135px',
              height: '135px',
              borderRadius: '50%',
              border: '5px solid white',
              position: 'absolute',
              left: '44.5%',
              top: '-13%',
            }}
          >
            <img
              src="/emma-edit.png"
              alt="emma"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              margin: '20px 0',
              marginTop: '60px',
              marginBottom: '40px',
            }}
          >
            <h5
              style={{
                color: '#17256e',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '20px',
              }}
            >
              Emma Jackson
            </h5>
            <Button variant="contained" className={classes.userBtn}>
              Change Profile Picture
            </Button>
          </div>
          <Grid
            container
            spacing={2}
            style={{ marginBottom: '20px' }}
            justifyContent="space-between"
          >
            <Grid item xs={6} style={{ maxWidth: '45%' }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '12px',
                }}
              >
                Full Name
              </Typography>
              <input
                type="text"
                placeholder="Full Name"
                className={classes.input}
              />
            </Grid>
            <Grid item xs={6} style={{ maxWidth: '45%' }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '12px',
                }}
              >
                Email Address
              </Typography>
              <input
                type="email"
                placeholder="Email Address"
                className={classes.input}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={6} style={{ maxWidth: '45%' }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '12px',
                }}
              >
                Password
              </Typography>
              <input
                type="password"
                placeholder="Password"
                className={classes.input}
              />
            </Grid>
            <Grid item xs={6} style={{ maxWidth: '45%' }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '12px',
                }}
              >
                Confirm Password
              </Typography>
              <input
                type="password"
                placeholder="Confirm Password"
                className={classes.input}
              />
            </Grid>
          </Grid>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              margin: '80px 0',
              marginBottom: '20px',
            }}
          >
            <Button variant="contained" className={classes.updateBtn}>
              Update
            </Button>
            <Button variant="contained" className={classes.cancelBtn}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
