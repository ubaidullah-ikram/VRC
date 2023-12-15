import React from 'react';
import img1 from '../pics/bg-nowhale.png';
import img2 from '../pics/whale.png';
import Header from './Navbar'; // Check the import path
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Row, Container, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const GetStart = () => {
  const divStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={divStyle}>
      <div style={{ position: 'relative' }}>
        <Header opacity="0.7" />
        {/* <img src="../pics/whale.png" alt="whale" /> */}
        <div>
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'round',
              width: '80vw',
              height: '79vh',
              position: 'absolute',
              top: '144px',
              right: '0',
            }}
          ></div>
        </div>

        <Container>
          <Row style={{ color: 'white' }}>
            <Col style={{ marginTop: '180px' }} xl={8}>
              <Col xl={9}>
                <strong style={{ fontSize: '24px' }}>
                  Risk Assessment of offshore wind vessel operation on Protected
                  species
                </strong>
                <hr />
                <p style={{ fontSize: '20px', fontWeight: '300' }}>
                  The mandate is to convert waste and barren state land into
                  cultivable land through incorporating modern techniques and
                  agri-best practices. Its intent is to revolutionize the
                  country’s agriculture sector horizontally and vertically,
                  hence ensuring its food security. Moreover,
                </p>

                <Button
                  variant="secondary"
                  style={{
                    borderRadius: '25px',
                    width: '30%',
                    backgroundColor: '#c0c0c0',
                    backgroundColor: 'rgba(192, 192, 192, 0.3)', // Using RGBA color for the background
                    color: 'white', // Set the text color to white
                    marginTop: '25px',
                    boxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Corrected box-shadow property
                    WebkitBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)', // Vendor prefix for webkit browsers
                    MozBoxShadow: '1px 1px 7px -2px rgba(0,0,0,0.75)',
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Get Start
                  </Link>
                </Button>
              </Col>
            </Col>

            <Col
              style={{
                marginTop: '100px',
                fontSize: '70px',
                lineHeight: '70px',
              }}
              xl={4}
            >
              <Col xl={1}>
                <strong>Vessel Risk Assessment</strong>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GetStart;
