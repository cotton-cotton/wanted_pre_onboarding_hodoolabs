import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  width: 1150px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLogo = styled.img`
  width: 47px;
`;
export const Title = styled.h1`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const List = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 50px;
`;
export const Line = styled.span`
  height: 30px;
  border-right: 1px solid white;
  margin-left: 50px;
`;
