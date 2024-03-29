import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='6' className='mb-4'>
          <div className="logo">
            <div>
              <h1 className='text-white'>J'Autos</h1>
            </div>
          </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque ab pariatur iste aut atque molestiae
                sequi voluptatem asperiores sapiente.
              </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3 list'>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' className='footer__text'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' className='footer__text'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' className='footer__text'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' className='footer__text'>Smart Watches</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3 list'>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop' className='footer__text'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart' className='footer__text'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login' className='footer__text'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#' className='footer__text'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>11454 Cairo, Egypt</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                <span><i className='ri-phone-line'></i></span>
                  <p>+20221234567890</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>example@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">
              Copyright {year} developed by Mohamed Saleh. All rights reserved.  
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer;