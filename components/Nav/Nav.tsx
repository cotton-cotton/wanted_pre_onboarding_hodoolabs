import * as S from './Nav.style';

const Nav = () => {
  return (
    <S.NavContainer>
      <S.Content>
        <S.TitleContainer>
          <S.TitleLogo src="images/Main/logo.png" alt="Logo-img" />
          <S.Title>땅콩스쿨</S.Title>
        </S.TitleContainer>
        <S.ListContainer>
          <S.List>도서구매</S.List>
          <S.List>장바구니</S.List>
          <S.List>마이페이지</S.List>
          <S.Line></S.Line>
          <S.List>이용권 관리</S.List>
          <S.List>로그인/회원가입</S.List>
        </S.ListContainer>
      </S.Content>
    </S.NavContainer>
  );
};

export default Nav;
