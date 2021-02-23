import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import * as S from './styles';
import ProductItem from './product-item/product-item';

const ProductList = ({ categoryTitle, products }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <S.ProductList>
      <S.Wrapper>
        {categoryTitle && (
          <S.Category data-testid={`category-title-${categoryTitle}`}>{categoryTitle}</S.Category>
        )}
        <Slider {...settings} data-testid={`slider-${categoryTitle}`}>
          {products?.map(({ id, title, images, productVariants }) => (
            <ProductItem
              key={id}
              id={id}
              title={title}
              images={images}
              productVariants={productVariants}
            />
          ))}
        </Slider>
      </S.Wrapper>
    </S.ProductList>
  );
};

ProductList.propTypes = {
  categoryTitle: PropTypes.string,
  products: PropTypes.instanceOf(Array),
};

export default ProductList;
