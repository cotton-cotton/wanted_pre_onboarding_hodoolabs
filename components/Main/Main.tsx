import * as S from './Main.style';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Background>
        <S.BackgroundImg
          src="images/Main/backgroundKids.png"
          alt="background-img-2"
        />
      </S.Background>
      <S.Star src="images/Main/star.png" alt="star-img" />
      <S.Banner>
        책 읽는 재미, <S.UnderLine>땅콩스쿨이</S.UnderLine> 만들어줄게요!
      </S.Banner>
      <S.Rectangle src="images/Main/Rectangle.png" alt="Rectangle-img" />
    </S.Wrapper>
  );
};

export default Main;
