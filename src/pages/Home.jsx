import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import "../styles/home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
import { useState, useEffect } from "react";
import counterImg from "../assets/images/top-category-exterior-accessories.png";
import Clock from "../components/Ui/Clock";
import NewArrival from "../components/Ui/NewArrival";
import Brands from "../components/Ui/Brands";

function Home() {
  const [trindingProducts, setTrindingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "parts"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "Electric Equ"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "headlights"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "rims"
    );

    setTrindingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                <p>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="button__50">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Brands />

      {/*  <Services />*/}

      <section>
        <Container>
          <Row className="p-4">
            <Col lg="12" md="6" className="new__arrival">
              <h1>New Arrival</h1>
            </Col>
            <Row>
              <Col lg="12" md="6">
                <NewArrival />
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
      {/* Intense Cover Image End*/}

      {/*Discover Item*/}
      <section className="discover_item">
        <Container>
          <Row className="p-3">
            <Col lg="6" md="12">
              <h1 className="p-3">OROS HOLIDAY EDITION BY ARMAF</h1>
              <p className="p-3">
                Oros HOLIDAY EDITION has a fruity and intoxicating aroma that
                brings the perfect reminder of holiday cheer. This enchanting
                fragrance has lush notes of Raspberries, cinnamon and vanilla
                giving a subtle rendering of rich holiday feasts and desserts.
                The royal combination of maroon and gold presents as the perfect
                holiday gift for the lady you love. Encased in an exclusive
                velvet box, every element of the packaging exhibits opulence and
                grandeur.
              </p>
              <Button className="button__50">Discover</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trending Products */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center p-3">
              <h2 className="section__tilte">Trending Parts</h2>
            </Col>
            <ProductsList data={trindingProducts} />
          </Row>
        </Container>
      </section>

      {/* Best Sales Products */}
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center p-3">
              <h2 className="section__tilte">Best Sales</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Exterior Accessories</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__tilte">New Arrivals</h2>
            </Col>
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__tilte">Popular Rims in Category</h2>
            </Col>

            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
