import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SlickData } from './SlickData';

function BookSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        {SlickData &&
          SlickData.map(({ id, src, alt }) => {
            return <SliderImg key={id} alt={alt} src={src} />;
          })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1900px;
    height: 450px;
    margin: 0 auto;
    border-radius: 20px;
  }

  .slick-slide div {
    cursor: pointer;
  }
`;
const SliderImg = styled.img`
  width: 700px;
  height: 400px;
`;
export default BookSlider;
