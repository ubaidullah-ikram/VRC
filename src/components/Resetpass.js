import React from 'react';
import  { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import Header from './Navbar';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
function Resetcard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  return (<>
    <Header />
    <Card style={{ width: '600px', height: "500px", margin: 'auto', marginTop: '100px' }}>
      <Card.Body>
        <Row className="justify-content-center">
          <Col>
            <Card.Title className="mt-4 text-center">Reset password</Card.Title>
          </Col>
        </Row>
        <Form>
          <Row className="justify-content-center">
            <Col>
            <Form.Group className="mt-4" controlId="formBasicPassword">
                  <Form.Label>Enter New Password</Form.Label>
                  <div style={{ position: 'relative', flex: 2 }}>
    <Form.Control
      type={showConfirmPassword ? 'text' : 'password'}
      placeholder=" Enter New Password"
      style={{ border: 'none', borderBottom: '1px solid #ced4da', width: '100%' }}
    />
    <span
      onClick={() => togglePasswordVisibility('confirmPassword')}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    >
      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
    </span>
  </div>
                </Form.Group>
              <Form.Group className="mt-4" controlId="formBasicPassword">
                  <Form.Label>Confrim New Password</Form.Label>
                  <div style={{ position: 'relative', flex: 2 }}>
    <Form.Control
      type={showConfirmPassword ? 'text' : 'password'}
      placeholder=" Confrim New Password"
      style={{ border: 'none', borderBottom: '1px solid #ced4da', width: '100%' }}
    />
    <span
      onClick={() => togglePasswordVisibility('confirmPassword')}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
    >
      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
    </span>
  </div>
                </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs="auto">
              <Button className="mt-5" variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
    </>
  );
}

export default Resetcard;
