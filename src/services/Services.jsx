import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./services.css";

const Services = () => {
  return (
    <section className="services">
      <Container>
      
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div whileHover={{ scale: 1.1 }} className="service__item">
                <div>
                  <h3 className="text-center p-3 font-weight-bold">
                    {item.title}
                  </h3>
                  <Row>
                    <Col>
                      <img src={item.imgUrl} />
                    </Col>
                 </Row>
                </div>
                <Button className="button-50">Shop Now</Button>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
