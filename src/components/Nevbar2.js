import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../pics/img4.png';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header2({ opacity, marginBottom, setIsLoggedIn }) {
  return (
    <Container
      style={{ borderRadius: '5px', width: '90%', marginLeft: '7.5%' }}
    >
      <Row>
        <Navbar
          className="mt-1"
          style={{
            borderRadius: '20px',
            backgroundColor: '#17256e',
            opacity,
            marginBottom,
          }}
          data-bs-theme="dark"
        >
          <Container
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Col xl={4}>
              <Navbar.Brand
                as={Link}
                to="/"
                className="nav-link"
                onClick={() => setIsLoggedIn(false)}
              >
                <img
                  src={img1}
                  width="100"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Your Logo"
                />
              </Navbar.Brand>
            </Col>
            <Col xl={6}>
              <Form style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '6px', left: '20px' }}>
                  <SearchOutlinedIcon style={{ color: '#b7b2bf' }} />
                </div>
                <Form.Control
                  style={{
                    maxWidth: '300px',
                    borderRadius: '25px',
                    backgroundColor: '#434e89',
                    opacity: '1',
                    paddingLeft: '50px',
                  }}
                  type="search"
                  placeholder="Search Location"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col xl={2}>
              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.8em', color: 'white' }}>
                    Eman jakson
                  </p>
                  <p
                    style={{
                      fontSize: '0.6em',
                      color: 'white',
                      textAlign: 'end',
                      background: '#3d4882',
                      border: 'none',
                      marginTop: '-10px',
                      borderRadius: '20px',
                      padding: '0 10px',
                    }}
                  >
                    <LogoutOutlinedIcon style={{ rotate: '180deg' }} /> Sign out
                  </p>
                </div>
                <Link to="/profile">
                  <img
                    src="/emma.png"
                    alt="emma"
                    style={{
                      borderRadius: '50%',
                      objectFit: 'contain',
                    }}
                  />
                </Link>
              </div>
            </Col>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header2;
