import * as S from './Main.style';

const Main = () => {
  return (
    <S.Container>
      <S.Mask />
      <S.Wrapper>
        <S.Star src="images/Main/star.png" alt="star-img" />
        <S.Banner>
          책 읽는 재미,
          <br />
          <S.UnderLine>땅콩스쿨이</S.UnderLine>
          <br /> 만들어줄게요!
        </S.Banner>
      </S.Wrapper>
      <S.Rectangle src="images/Main/mouse.png" alt="Rectangle-img" />
    </S.Container>
  );
};

export default Main;
