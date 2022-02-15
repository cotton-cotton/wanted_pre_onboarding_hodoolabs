import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 80px;
`;
export const Content = styled.div`
  display: flex;
  width: 1150px;
  margin: 0 auto;
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
  font-size: 20px;
  font-weight: 600;
`;
export const Line = styled.span`
  height: 30px;
  border-right: 1px solid white;
`;
