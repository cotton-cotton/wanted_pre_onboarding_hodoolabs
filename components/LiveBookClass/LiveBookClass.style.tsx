import { EDEADLK } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 873px;
`;
export const Container = styled.div`
  position: absolute;
  top: 1800px;
  right: 475px;
  display: flex;
`;
export const Description = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  white-space: pre-wrap;
`;
export const SubTitle = styled.h4`
  width: 200px;
  line-height: 30px;
  white-space: pre-wrap;
`;
export const Screen = styled.img``;
export const Video = styled.video`
  position: absolute;
  top: 26px;
  right: 23px;
  width: 700px;
  height: 525px;
  border-radius: 20px;
`;
