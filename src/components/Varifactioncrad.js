import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
import Header from './Navbar';

const VerificationCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleVerification = () => {
    // Simulate verification logic (should be done on the server)
    const serverCode = '123456'; // Replace with the actual code sent via email
    if (verificationCode === serverCode) {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  };

  return (
    <>
      <Header />
      <Card style={{ width: '500px', height: '450px', margin: 'auto', marginTop: '100px' }}>
        <Card.Body>
          <Row className="justify-content-center">
            <Col>
              <Card.Title className="mt-4 text-center">Email Verification</Card.Title>
            </Col>
          </Row>
          {!isCodeValid ? (
            <Form>
              <Row className="justify-content-center">
                <Col>
                  <Form.Group className="mt-5" controlId="formBasicCode">
                    <Form.Label>Enter Verification Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <Button className="mt-4" variant="primary" onClick={handleVerification}>
                    Verify
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <Alert variant="success" className="mt-4">
              Verification successful! You can now access your account.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default VerificationCard;
