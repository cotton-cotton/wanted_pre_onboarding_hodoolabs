import styled from 'styled-components';

export const Wrapper = styled.img`
  position: relative;
  width: 1920px;
  height: 1080px;
  object-fit: cover;
`;
export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 320px;
  object-fit: cover;
`;
export const NavContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`;
export const Content = styled.div`
  display: flex;
  width: 1150px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;
export const TitleLogo = styled.img`
  width: 10%;
`;
export const Title = styled.h1`
  margin-left: 20px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
export const List = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export const Line = styled.span`
  height: 30px;
  border-right: 1px solid white;
`;
export const Star = styled.img`
  position: absolute;
  top: 270px;
  left: 360px;
`;
export const Banner = styled.h1`
  position: absolute;
  top: 230px;
  left: 390px;
  width: 350px;
  color: black;
  font-size: 50px;
  font-weight: 500;
  line-height: 60px;
`;
export const UnderLine = styled.h1`
  width: 220px;
  border-bottom: 5px solid #ffbe50;
`;
export const Rectangle = styled.img`
  position: absolute;
  bottom: -300px;
  left: 1250px;
`;
