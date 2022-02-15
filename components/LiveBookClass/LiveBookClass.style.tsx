import { EDEADLK } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 873px;
  background-image: url('images/LiveBookClass/stripeBackground.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const Container = styled.div`
  position: absolute;
  top: 100px;
  right: 475px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1150px;
  margin: 0 auto;
`;
export const Description = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
export const Title = styled.h1`
  margin: 0 40px 30px 0;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  white-space: pre-wrap;
`;
export const SubTitle = styled.h4`
  width: 240px;
  font-size: 20px;
  line-height: 30px;
  white-space: pre-wrap;
`;
export const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Screen = styled.img``;
export const Video = styled.video`
  position: absolute;
  width: 700px;
  height: 525px;
  border-radius: 20px;
`;
