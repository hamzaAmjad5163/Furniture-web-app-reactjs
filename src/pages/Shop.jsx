import React, {useState} from 'react';
import CommonSection from '../components/UI/CommonSection';
import {Container, Row, Col} from 'reactstrap';

import ProductsList from '../components/UI/ProductList';
import products from '../assets/data/products';
import '../styles/shop.css';

import Helmet from '../components/Helmet/Helmet';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);
  const handleFilter = e => {
      const filterValue = e.target.value;
      if(filterValue === 'sofa'){
        const filterProducts = products.filter((item) => item.category === 'sofa');

        setProductsData(filterProducts);
      }

      if(filterValue === 'mobile'){
        const filterProducts = products.filter((item) => item.category === 'mobile');

        setProductsData(filterProducts);
      }

      if(filterValue === 'chair'){
        const filterProducts = products.filter((item) => item.category === 'chair');

        setProductsData(filterProducts);
      }

      if(filterValue === 'watch'){
        const filterProducts = products.filter((item) => item.category === 'watch');

        setProductsData(filterProducts);
      }

      if(filterValue === 'wireless'){
        const filterProducts = products.filter((item) => item.category === 'wireless');

        setProductsData(filterProducts);
      }
      
  }

  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchProducts = products.filter((item)=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchProducts);
  }
  return <Helmet title='Shop'>

    <CommonSection title='Products'/>


<section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className='filter__widget'>
            <select onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value='sofa'>Sofa</option>
              <option value='mobile'>Mobile</option>
              <option value='chair'>Chairs</option>
              <option value='watch'>Watches</option>
              <option value='wireless'>Wireless</option>
            </select>
          </div>
        </Col>

        <Col lg='3' md='12' className='text-end'>
        <div className='filter__widget'>
            <select>
              <option>Sorted By</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
            </select>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className='search__box'>
            <input type='text' placeholder='Search...' onChange={handleSearch} />
            <span><i className='ri-search-line'></i></span>
          </div>
        </Col>
      </Row>
    </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No Product Found!</h1> :
            <ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop;
