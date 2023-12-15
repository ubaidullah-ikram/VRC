import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
import Header from '../components/Navbar';
import img1 from '../pics/img5.jpg';

function Login({ setIsLoggedIn }) {
  const divStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (Object.values(formData).some((field) => field === '')) {
      toast.warning('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(
        'https://your-api-endpoint.com/login',
        formData
      );

      if (response.status === 200) {
        console.log('Login successful!');
        toast.success('Login successful!');
        // Redirect or perform any action after successful login
      } else {
        console.error('Invalid credentials');
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error during login');
    }
  };

  return (
    <div style={divStyle}>
      <Container>
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
            <Card.Title
              className="text-center"
              style={{
                fontWeight: '700',
                color: '#0A1967',
                fontSize: '32px',
              }}
            >
              Log In
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-4" controlId="formBasicFirstName">
                <Form.Label
                  style={{
                    color: '#0A1967',
                    fontSize: '20px',
                    fontWeight: '400',
                  }}
                >
                  Email Address
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
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
                  Password
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
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
                      to="/map"
                      style={{ color: 'white', textDecoration: 'none' }}
                      onClick={() => setIsLoggedIn(true)}
                    >
                      <span style={{ color: 'white' }}>Login</span>
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
                    Don’t have an Account?{' '}
                    <Link
                      to="/signup"
                      style={{
                        color: '#0A1967',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      Sign Up
                    </Link>
                  </p>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default Login;
