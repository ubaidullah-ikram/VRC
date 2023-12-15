import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  Checkbox,
  makeStyles,
} from '@material-ui/core';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import Header2 from './Nevbar2';
import { Button, Grid } from '@mui/material';

const data = [
  {
    userId: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    registrationDate: '2023-01-01',
  },
  {
    userId: 2,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    registrationDate: '2023-02-15',
  },
  {
    userId: 3,
    name: 'Bob Smith',
    email: 'bob@example.com',
    registrationDate: '2023-03-10',
  },
  {
    userId: 4,
    name: 'Emma Brown',
    email: 'emma@example.com',
    registrationDate: '2023-04-22',
  },
  {
    userId: 5,
    name: 'Michael Davis',
    email: 'michael@example.com',
    registrationDate: '2023-05-18',
  },
  {
    userId: 6,
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    registrationDate: '2023-06-09',
  },
];

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#ff0000', // Red color for delete button
    '&:hover': {
      backgroundColor: '#cc0000', // Darker shade of red on hover
    },
  },
  editButton: {
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#00ff00', // Green color for edit button
    '&:hover': {
      backgroundColor: '#00cc00', // Darker shade of green on hover
    },
  },
  button: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '20px',
    color: 'black',
    backgroundColor: 'white', // Red color for delete button
    '&:hover': {
      backgroundColor: '#cc0000', // Darker shade of red on hover
    },
    width: '100px',
    padding: '8px 20px',
  },
  searchBtn: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'left',
    color: 'black',
    backgroundColor: 'white', // Red color for delete button
    '&:hover': {
      backgroundColor: '#cc0000', // Darker shade of red on hover
    },
    width: '200px',
    padding: '8px 20px',
  },
  userBtn: {
    textTransform: 'none', // To prevent text capitalization
    // Add any other styles you need for the button
    borderRadius: '20px',
    color: 'white',
    backgroundColor: '#17256e', // Red color for delete button
    '&:hover': {
      backgroundColor: '#cc0000', // Darker shade of red on hover
    },
    width: '200px',
    padding: '8px 20px',
  },
  icon: {
    marginRight: theme.spacing(1), // Adjust the margin between icon and text
  },
}));

const User = ({ setIsLoggedIn }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // State for "Select All" checkbox
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Function to handle individual row checkbox click
  const handleCheckboxClick = (userId) => {
    const selectedIndex = selected.indexOf(userId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  // Function to handle "Select All" checkbox click
  const handleSelectAllClick = () => {
    if (selectAll) {
      setSelected([]);
      setSelectAll(false);
    } else {
      const allUserIds = data.map((row) => row.userId);
      setSelected(allUserIds);
      setSelectAll(true);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dataToRender = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <div
        style={{
          maxWidth: '85%',
          margin: '110px auto 0',
          padding: '30px 0 0',
        }}
      >
        <div style={{ marginLeft: '3%' }}>
          <h5
            style={{
              color: '#17256e',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            Manage Users
          </h5>
          <p>
            Home{' '}
            <span style={{ color: '#17256e', fontWeight: 'bold' }}>
              <ArrowRightOutlinedIcon /> Manage User
            </span>
          </p>
        </div>
        <TableContainer
          component={Paper}
          style={{ background: '#f9f9f9', marginLeft: '3%' }}
        >
          <Grid
            container
            justifyContent="space-between"
            style={{ margin: '20px 0 0' }}
          >
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
            <Grid item style={{ marginLeft: '20px' }}>
              <h6
                style={{
                  color: '#17256e',
                  fontWeight: 'bold',
                }}
              >
                Users{' '}
                <span
                  style={{
                    color: 'white',
                    width: '20px',
                    borderRadius: '5px',
                    background: '#17256e',
                    padding: '2px 6px',
                    marginLeft: '10px',
                  }}
                >
                  145
                </span>
              </h6>
              <div>
                <p>
                  Sort by :{' '}
                  <span
                    style={{
                      color: '#17256e',
                      fontWeight: 'bold',
                    }}
                  >
                    Recent <KeyboardArrowDownOutlinedIcon />
                  </span>{' '}
                </p>
              </div>
            </Grid>
            <Grid item style={{ marginRight: '150px' }}>
              <Grid container justifyContent="space-between" gap="10px">
                <Button variant="contained" className={classes.searchBtn}>
                  <SearchOutlinedIcon className={classes.icon} />
                  Search
                </Button>
                <Grid item>
                  <Button variant="contained" className={classes.button}>
                    <FilterAltOutlinedIcon className={classes.icon} />
                    Filter
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.userBtn}>
                    Add a new user
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Table aria-label="user table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Registration Date</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.userId}>
                  <TableCell>
                    <Checkbox
                      checked={selected.indexOf(row.userId) !== -1}
                      onChange={() => handleCheckboxClick(row.userId)}
                    />
                  </TableCell>
                  <TableCell>{row.userId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.registrationDate}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => console.log(row.userId)}
                      className={classes.deleteButton}
                    >
                      <DeleteRoundedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="edit"
                      onClick={() => console.log(row.userId)}
                      className={classes.editButton}
                    >
                      <ModeEditOutlineRoundedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Switch
                    // ... (status logic here)
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#17256e',
          maxWidth: '85%',
          marginTop: '10px',
          marginLeft: '10%',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <UsePagination />
      </div>
    </>
  );
};

export default User;

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav style={{ color: 'white', margin: '20px 0' }}>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  backgroundColor: selected ? '#787fa3' : 'transparent',
                  borderRadius: '5px',
                  border: 'none',
                  color: 'white',
                  margin: '0 10px',
                  height: '30px',
                  width: '30px',
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                type="button"
                {...item}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color:
                    type === 'previous' && page === 0
                      ? '#787fa3'
                      : type === 'next' && page === 11
                      ? '#787fa3'
                      : 'white',
                  height: '30px',
                  width: '100px',
                }}
              >
                {type === 'previous' ? 'Previous' : 'Next'}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
