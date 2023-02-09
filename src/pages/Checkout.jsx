import React from 'react';
import CommonSection from '../components/Ui/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const done = () => {
    toast.success("done");
    Navigate('./home');
  }


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__groub'>
                  <input type="text" placeholder='Enter your name'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="email" placeholder='Enter your email'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="number" placeholder='Phone Number'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="text" placeholder='Street address'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="text" placeholder='City'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="text" placeholder='Postal code'/>
                </FormGroup>
                <FormGroup className='form__groub'>
                  <input type="text" placeholder='Country'/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6><span>Shipping: <br/> free shipping</span> <span>$0</span></h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <Link to='/home' onClick={done}
                  className="buy__btn auth__btn mt-3 d-block text-center w-100 bg-white text-black fw-bold">
                  Place an order</Link>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;