import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../pics/img4.png';

function Header({ backgroundColor, opacity, marginBottom }) {
  return (
    <Container style={{ borderRadius: '5px' }}>
      <Row>
        <Navbar
          className="mt-1"
          style={{
            borderRadius: '20px',
            backgroundColor: backgroundColor
              ? backgroundColor
              : 'rgba(192, 192, 192, 0.3)', // Using RGBA color for the background
            color: 'white',
            marginBottom,
            boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
            WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
            MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
          }}
          data-bs-theme="dark"
        >
          <Container>
            <Col xl={10}>
              <Navbar.Brand
                as={Link}
                to="/"
                className="nav-link"
                style={{ marginLeft: '20px' }}
              >
                <img
                  src={img1}
                  width="100"
                  height="44"
                  className="d-inline-block align-top"
                  alt="Your Logo"
                />
              </Navbar.Brand>
            </Col>
            <Col xl={2}>
              <Nav className="me-auto">
                <Nav.Item>
                  <Link
                    to="/login"
                    className="nav-link"
                    style={{ color: 'white', marginRight: '20px' }}
                  >
                    Login
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                    to="/Signup"
                    className="nav-link"
                    style={{ color: 'white' }}
                  >
                    Sign up
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;
