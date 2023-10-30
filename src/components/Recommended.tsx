import React, { FC } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css';
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Product } from "../interfaces";

const Recommended = () => {

      const RecommendedSection = styled.section`
            width: 100%;
            height: 600px;
            padding: 40px 0 100px 0;
      `;
      const SectionTitle = styled.h1`
            font-size: 28px;
            font-weight: 700px;
            text-align: center;
            margin-bottom: 40px;
      `;

const { commerce,  products , cart , updateCart} = useShopContext();
 
 

    const GetProduct: FC<{ product: Product}> = ({ product }) => (
      <SplideSlide  key={product.id} >
            {/* <h4>{product.name}</h4> */}
            <img src={product.image.url} style={
                  {     padding: '0 0 0',
                        margin: '4px 0 20px',
                        transform: 'skewY(3deg)',
                        borderRight: '10px solid gray',
                        borderTop: '5px solid gray'
                  }
                } width={250} height={340} alt={product.name} />
            {/* <div>{product.price.formatted_with_symbol}</div>
            <button  >Add to Cart</button> */}
            </SplideSlide>
    );
   

    
    
    return (
        <RecommendedSection>
            <SectionTitle>The Masterpieces</SectionTitle>
            <Splide aria-label="My Favorite Images" options={{
                  type   : 'loop',
                  perPage: 6,
                  width : '1200',
                  // autoplay: true,
                  // interval: 1000
 
            }}>
                {products && products.map((product, index) => (
                    <GetProduct product={product as Product} key={index}  />
                ))}
            </Splide>
            
        </RecommendedSection>
    );
}

export default Recommended;