import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1150px;
  margin: 0 auto;
  padding: 150px 0px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 100px;
`;

export const Coupon = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 1140px;
  height: 450px;
`;

export const CouponImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(30px 30px 40px rgba(0, 0, 0, 0.1));
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Logo = styled.div`
  width: 135px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const CouponTitle = styled.h1`
  font-size: 50px;
  font-weight: 100;
  line-height: 72px;
  text-align: center;
  margin: 30px 0px;
`;

export const CouponSubTitle = styled.h3``;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const DashedLine = styled.div`
  position: absolute;
  left: 660px;
  width: 2px;
  height: 368px;
  background-image: url('/images/CouponSection/dashedLine.png');
  z-index: 10;
`;

export const DownloadBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  border-radius: 50px;
  color: white;
  background-color: #333333;
`;

export const BtnImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;

export const btnAlert = styled.div`
  position: absolute;
  top: 140px;
  padding: 10px 15px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

export const btnArrow = styled.div`
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  top: 33px;
  left: 100px;
  background-image: url('/images/CouponSection/polygon.png');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 11;
`;
