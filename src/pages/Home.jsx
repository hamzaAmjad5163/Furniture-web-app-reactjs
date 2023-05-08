
import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';

import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png';
import { motion } from 'framer-motion';

import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';

import {Container, Row, Col} from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import useGetData from '../custom-hooks/useGetData';

const Home = () => {

  const {data: products, loading} = useGetData('products');

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

useEffect(()=> {
  const filteredTrendingProducts = products.filter(item => item.category === 'chair');
  
  const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');

  const filteredMobileProducts = products.filter(item => item.category === 'mobile');

  const filteredWirelessProducts = products.filter(item => item.category === 'wireless');

  const filteredPopularProducts = products.filter(item => item.category === 'watch');

  
  setTrendingProducts(filteredTrendingProducts);
  setBestSalesProducts(filteredBestSalesProducts);
  setMobileProducts (filteredMobileProducts);
  setWWirelessProducts(filteredWirelessProducts);
  setPopularProducts(filteredPopularProducts);
},[products]);

  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero__subtitle'> Trending Products in {year}</p>
              <h2 >Make Your Interior More Minimalistic & Modern</h2>
              <p>Habibi! Come to SemPro mall! Get new products and items. Awesome :/ </p>
              <motion.button whileTap={{scale: 1.2 }} className='buy__btn'><Link to='/shop'>Shop Now</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img'>
              <img src={heroImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className='trending__product'>
      <Container>
        <Row>
          <Col lg='12' className='text__center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={trendingProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className='best__sales'>
      <Container>
      <Row>
          <Col lg='12' className='text__center'>
            <h2 className='section__title'>Best Sales!</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={bestSalesProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
          <div className='clock__top-content'>
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
            <Clock />
            <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt=''/>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text__center mb-5'>
            <h2 className='section__title'>New Arrivals!</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={mobileProducts}/>
          }
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={wirelessProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className='popular__category'>
    <Container>
        <Row>
          <Col lg='12' className='text__center mb-5'>
            <h2 className='section__title'>Popular Categories!</h2>
          </Col>
          {
            loading ? <h4 className='fw-bold'>Loading.....</h4> : 
            <ProductList data={popularProducts}/>
          }
          
        </Row>
      </Container>
    </section>
  </Helmet>
  
};

export default Home;
