import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { REVIEW_LIST } from '../../shared/constants';

function ReviewSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {REVIEW_LIST &&
          REVIEW_LIST.map(({ id, userId, content }) => {
            return (
              <>
                <SliderId key={id}>{userId}</SliderId>
                <SliderContent key={id}>{content}</SliderContent>
              </>
            );
          })}
      </StyledSlider>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 550px;
    margin-top: 150px;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50px;
  }
`;
const SliderId = styled.div`
  margin: 50px 0;
  text-align: center;
`;
const SliderContent = styled.div`
  width: 500px;
  height: 400px;
  margin: 0 auto;
  font-size: 20px;
  cursor: pointer;
  line-height: 40px;
`;

export default ReviewSlider;
