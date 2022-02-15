import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 573px;
  background-color: #ffb100;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1150px;
  margin: 0 auto;
  text-align: center;
`;
export const Logo = styled.img`
  width: 15%;
  margin: -10px 0 20px 0;
`;
export const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 50px;
  color: white;
`;
export const Description = styled.span`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: white;
  white-space: pre-wrap;
`;
