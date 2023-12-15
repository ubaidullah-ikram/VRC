import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
import { Link } from 'react-router-dom';
import Header from '../components/Navbar';
import img1 from '../pics//img5.jpg';
function Signup() {
  const divStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto',
    paddingBottom: '10px',
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div style={divStyle}>
      <Header backgroundColor="#17256E" />
      <Card
        style={{
          width: '600px',
          margin: 'auto',
          marginTop: '60px',
          // marginBottom: '10px',
          borderRadius: '12px',
          padding: '0 50px',
          // paddingBottom: '20px',
        }}
      >
        <Card.Body style={{ color: 'blue' }}>
          <Row className="justify-content-center">
            <Col>
              <Card.Title
                className="text-center"
                style={{
                  fontWeight: '700',
                  color: '#0A1967',
                  fontSize: '32px',
                }}
              >
                Sign Up
              </Card.Title>
            </Col>
          </Row>
          <Form>
            <Row className="justify-content-center">
              <Col>
                <Form.Group className="mt-4" controlId="formBasicFirstName">
                  <Form.Label
                    style={{
                      color: '#0A1967',
                      fontSize: '20px',
                      fontWeight: '400',
                    }}
                  >
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    style={{
                      border: 'none',
                      borderBottom: '1px solid #17256E',
                      paddingLeft: '0px',
                      marginTop: '-6px',
                      fontSize: '18px',
                      color: '#A1A1A1',
                      borderRadius: '0',
                      // paddingLeft: '0px',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formBasicLastName">
                  <Form.Label
                    style={{
                      color: '#0A1967',
                      fontSize: '20px',
                      fontWeight: '400',
                    }}
                  >
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    style={{
                      border: 'none',
                      borderBottom: '1px solid #17256E',
                      paddingLeft: '0px',
                      marginTop: '-6px',
                      fontSize: '18px',
                      color: '#A1A1A1',
                      borderRadius: '0',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formBasicEmail">
                  <Form.Label
                    style={{
                      color: '#0A1967',
                      fontSize: '20px',
                      fontWeight: '400',
                    }}
                  >
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    style={{
                      border: 'none',
                      borderBottom: '1px solid #17256E',
                      paddingLeft: '0px',
                      marginTop: '-6px',
                      fontSize: '18px',
                      color: '#A1A1A1',
                      borderRadius: '0',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mt-4" controlId="formBasicPassword">
                  <Form.Label
                    style={{
                      color: '#0A1967',
                      fontSize: '20px',
                      fontWeight: '400',
                    }}
                  >
                    Password
                  </Form.Label>
                  <div style={{ position: 'relative', flex: 2 }}>
                    <Form.Control
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="**********"
                      style={{
                        border: 'none',
                        borderBottom: '1px solid #17256E',
                        paddingLeft: '0px',
                        marginTop: '-6px',
                        fontSize: '18px',
                        color: '#A1A1A1',
                        borderRadius: '0',
                      }}
                    />
                    <span
                      onClick={() =>
                        togglePasswordVisibility('confirmPassword')
                      }
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff style={{ color: '#0A1967' }} />
                      ) : (
                        <FiEye style={{ color: '#0A1967' }} />
                      )}
                    </span>
                  </div>
                </Form.Group>

                <Form.Group
                  className="mt-4"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label
                    style={{
                      color: '#0A1967',
                      fontSize: '20px',
                      fontWeight: '400',
                      borderRadius: '0',
                    }}
                  >
                    Confirm Password
                  </Form.Label>
                  <div style={{ position: 'relative', flex: 2 }}>
                    <Form.Control
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="**********"
                      style={{
                        border: 'none',
                        borderBottom: '1px solid #17256E',
                        paddingLeft: '0px',
                        marginTop: '-6px',
                        fontSize: '18px',
                        color: '#A1A1A1',
                        borderRadius: '0',
                      }}
                    />
                    <span
                      onClick={() =>
                        togglePasswordVisibility('confirmPassword')
                      }
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff style={{ color: '#0A1967' }} />
                      ) : (
                        <FiEye style={{ color: '#0A1967' }} />
                      )}
                    </span>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto">
                <Button
                  style={{
                    borderRadius: '12px',
                    width: '300px',
                    marginTop: '40px',
                    background: '#17256E',
                  }}
                >
                  <Link
                    to="/login"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <span style={{ color: 'white' }}>Register</span>
                  </Link>
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <p
                  style={{
                    color: '#0A1967',
                    fontSize: '16px',
                    marginTop: '20px',
                  }}
                >
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    style={{
                      color: '#0A1967',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                    }}
                  >
                    Log In
                  </Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
