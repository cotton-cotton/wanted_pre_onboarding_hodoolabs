import styled from 'styled-components';

export const Container = styled.div`
  background: url('/images/ReviewSection/backgroundImg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 660px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
  width: 100%;
`;

export const Btn = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ReviewWrap = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const ProfileGroup = styled.div`
  position: relative;
`;

export const AnimationImg = styled.div`
  position: absolute;
  top: -1px;
  left: -48px;
  width: 137px;
`;

export const ProfileImg = styled.div`
  width: 90px;
  z-index: 100;
`;

export const UserId = styled.p`
  margin: 50px 0px;
  opacity: 0.7;
`;

export const UserReview = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 36px;
`;

export const StatusBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #ffb100;
`;
