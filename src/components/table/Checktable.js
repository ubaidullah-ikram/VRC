/* eslint-disable */
import {
  Flex,
  Progress,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// Custom components
import Card from '../table/Card';

import { ToastContainer, toast } from 'react-toastify';

import Menu from '../table//Meun';
import React, { useEffect, useMemo, useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import axios from 'axios';

import Pagination from 'react-bootstrap/Pagination';

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const newUserData = [
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
  {
    userId: 7,
    name: 'Liam Martinez',
    email: 'liam@example.com',
    registrationDate: '2023-07-30',
  },
  {
    userId: 8,
    name: 'Olivia Garcia',
    email: 'olivia@example.com',
    registrationDate: '2023-08-14',
  },
  {
    userId: 9,
    name: 'Noah Lopez',
    email: 'noah@example.com',
    registrationDate: '2023-09-27',
  },
  {
    userId: 10,
    name: 'Ava Rodriguez',
    email: 'ava@example.com',
    registrationDate: '2023-10-05',
  },
];

export default function CheckTable(props) {
  const { columnsData, tableData } = props;
  const [myData, setMyData] = useState([]);
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const [userData, setUserData] = useState(null);
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = '1';

  // Function to handle the password submission
  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      toast('User deleted successfully!');
      setShow(false);
      setTimeout(() => {
        window.location.reload();
      }, 7000);
    } else {
      toast.error(' Incorrect password', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  const handlePageChange = (pageNumber) => {
    // Add logic to handle page change (e.g., update state or fetch data)
    console.log(`Go to page ${pageNumber}`);
  };

  const paginationItems = [];
  for (let number = 1; number <= 4; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handleUserSubmit = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    getData();
  }, []); // Empty dependency array to run the effect only once on mount

  async function getData() {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('CASE', 'GET_ALL_USERS');

      const response = await axios.post(
        'https://limspakistan.com/monitor/apps/dev_api.php',
        formDataToSend,
        {}
      );

      console.log('Response from the server:', response);

      if (response.status === 200) {
        // Assuming the server response is an array of data
        console.log(response.data);
        setMyData(response.data);
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  if (myData.length === 0) {
    return <h5> No Data</h5>;
  }

  return (
    <>
      {' '}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Conformation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete permanently?</p>

          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{ marginTop: '10px' }}
              onClick={handlePasswordSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Card
        direction="column"
        w="100%"
        px="0px"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            Block user
          </Text>
          <Menu />
        </Flex>

        <TableContainer component={Paper}>
          <Table aria-label="user table">
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Registration Date</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newUserData.map((row) => (
                <TableRow key={row.userId}>
                  <TableCell>{row.userId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.registrationDate}</TableCell>
                  {/* <TableCell>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ToastContainer />
        <Pagination style={{ marginLeft: '500px' }}>
          {paginationItems}
        </Pagination>
      </Card>
    </>
  );
}
