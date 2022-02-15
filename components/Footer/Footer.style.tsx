import styled from 'styled-components';

export const Container = styled.footer``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1150px;
  margin: 0 auto;
  padding: 60px 0;
`;

export const LeftSide = styled.div``;

export const CompanyName = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Content = styled.span`
  color: #333333;
  font-size: 14px;
  line-height: 24px;
`;

export const UnderLine = styled.span`
  border-bottom: 2px solid #333333;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoldContent = styled.span`
  font-weight: bold;
  margin: 0px 12px;
`;

export const SocialWrap = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const SocialCircle = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  margin-right: 20px;
  border-radius: 50%;
  border: 1.5px solid #eeeeee;
`;

export const SocialImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
