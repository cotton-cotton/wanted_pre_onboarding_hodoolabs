import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url('/images/Main/background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('/images/Main/backgroundKids.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 1150px;
  margin: 0 auto;
  padding-top: 230px;
  position: relative;
`;
export const Star = styled.img`
  position: absolute;
  top: 270px;
  left: -30px;
`;
export const Banner = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
`;
export const UnderLine = styled.span`
  border-bottom: 5px solid #ffbe50;
`;
export const Rectangle = styled.img`
  position: absolute;
  width: 50px;
  bottom: 30px;
  left: 50%;
`;
