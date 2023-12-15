import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Form, Row, Col, Button } from 'react-bootstrap';
import img6 from '../pics/img5.jpg';
import img7 from '../pics/img7.webp';
import Header2 from './Nevbar2';
import FileUpload from './FileUpload';
import { Dialog, DialogContent, Paper } from '@mui/material';

function Scouting({ setIsLoggedIn }) {
  const [isChecked, setIsChecked] = useState(false);
  const [fileUpload, setFileUpload] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Header2 backgroundColor="#323aa8" setIsLoggedIn={setIsLoggedIn} />
      </div>

      <div style={{ maxWidth: '90%', marginTop: '110px', marginLeft: '5%' }}>
        <Card style={{ background: '#f5fff5' }}>
          <Card.Body>
            <Card.Title style={{ color: 'blue', fontSize: '2em' }}>
              <strong> MY FILES</strong>
            </Card.Title>
            <Card style={{ marginTop: '30px' }}>
              <Card.Body>
                <Row>
                  <Col xl={9}>
                    <div style={{ marginTop: '40px' }}>
                      <Form className="d-flex">
                        <Form.Control
                          style={{ maxWidth: '200px', borderRadius: '25px' }}
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                      </Form>
                    </div>
                  </Col>
                  <Col xl={3}>
                    <Button
                      style={{
                        borderRadius: '45px',
                        width: '250px',
                        marginTop: '40px',
                        background: '#323aa8',
                      }}
                      onClick={() => setFileUpload(true)}
                    >
                      Upload Files
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row className="g-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card
                    style={{
                      maxHeight: '200px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '20px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      margin: '20px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={img7}
                      style={{ maxWidth: '100px', marginRight: '20px' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with text below .
                        </Card.Text>
                        <div style={{}}>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                            style={{
                              '--bs-checked-background-color': 'green',
                              '--bs-checked-border-color': 'green',
                              '--bs-checked-box-shadow': '0 0 0 1px green',
                              margingleft: '525px',
                            }}
                          />
                        </div>
                      </Card.Body>
                    </div>
                    <div>
                      {/* <Card.Img
                        variant="top"
                        src={img6}
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                      /> */}
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '20px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{ maxWidth: '30px', marginRight: '20px' }}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card
                    style={{
                      maxHeight: '200px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '20px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      margin: '20px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={img7}
                      style={{ maxWidth: '100px', marginRight: '20px' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below
                        </Card.Text>
                        <div style={{}}>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                            style={{
                              '--bs-checked-background-color': 'green',
                              '--bs-checked-border-color': 'green',
                              '--bs-checked-box-shadow': '0 0 0 1px green',
                              margingleft: '525px',
                            }}
                          />
                        </div>
                      </Card.Body>
                    </div>
                    <div>
                      <Card.Img
                        variant="top"
                        src={img6}
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '20px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{ maxWidth: '30px', marginRight: '20px' }}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card
                    style={{
                      maxHeight: '200px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '20px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      margin: '20px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={img7}
                      style={{ maxWidth: '100px', marginRight: '20px' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below
                        </Card.Text>
                        <div style={{}}>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                            style={{
                              '--bs-checked-background-color': 'green',
                              '--bs-checked-border-color': 'green',
                              '--bs-checked-box-shadow': '0 0 0 1px green',
                              margingleft: '525px',
                            }}
                          />
                        </div>
                      </Card.Body>
                    </div>
                    <div>
                      <Card.Img
                        variant="top"
                        src={img6}
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '20px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{ maxWidth: '30px', marginRight: '20px' }}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card
                    style={{
                      maxHeight: '200px',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: '20px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      margin: '20px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={img7}
                      style={{ maxWidth: '100px', marginRight: '20px' }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text
                        </Card.Text>
                        <div style={{}}>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={isChecked}
                            onChange={handleSwitchChange}
                            style={{
                              '--bs-checked-background-color': 'green',
                              '--bs-checked-border-color': 'green',
                              '--bs-checked-box-shadow': '0 0 0 1px green',
                              margingleft: '525px',
                            }}
                          />
                        </div>
                      </Card.Body>
                    </div>
                    <div>
                      <Card.Img
                        variant="top"
                        src={img6}
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '10px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{
                          maxWidth: '30px',
                          marginRight: '20px',
                          marginBottom: '20px',
                        }}
                      />
                      <Card.Img
                        variant="top"
                        src="holder.js/100px160"
                        style={{ maxWidth: '30px', marginRight: '20px' }}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </div>
      {fileUpload && (
        <Dialog
          open={fileUpload}
          onClose={() => setFileUpload(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            elevation: 3,
            sx: {
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              padding: 2,
            },
          }}
        >
          <DialogContent>
            <FileUpload cancelUpload={setFileUpload} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default Scouting;
