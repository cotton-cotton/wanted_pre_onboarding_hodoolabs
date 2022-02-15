import * as S from './Nav.style';

const Nav = () => {
  return (
    <>
      <S.Wrapper src="images/bg 1.png" alt="background-img" />
      <S.BackgroundImg src="images/kids 3.png" alt="background-img-2" />
      <S.NavContainer>
        <S.Content>
          <S.TitleContainer>
            <S.TitleLogo src="images/땅콩로고.png" alt="Logo-img" />
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
      <S.Star src="images/star 2.png" alt="star-img" />
      <S.Banner>
        책 읽는 재미, <S.UnderLine>땅콩스쿨이</S.UnderLine> 만들어줄게요!
      </S.Banner>
      <S.Rectangle src="images/Rectangle 125.png" alt="Rectangle-img" />
    </>
  );
};

export default Nav;
