import React from "react";
import "../../styles/brands.css";
import brandsData from "../../assets/data/brandsData";
import { Button, Col, Container, Row } from "react-bootstrap";

const Brands = () => {
  return (
    <div className="brand__content">
      <Container>
        <Row lg="12" md="6">
          <Col className="brand__images">
            {brandsData?.map((item) => (
              <img src={item.imgUrl} alt="brand images" />
            ))}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Brands;
