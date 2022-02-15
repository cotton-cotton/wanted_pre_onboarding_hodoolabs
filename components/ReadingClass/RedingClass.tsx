import * as S from './ReadingClass.style';
import Fade from 'react-reveal/Fade';

const ReadingClass = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Fade>
          <S.TitleContainer>
            <S.Title>{`실시간 방송 형태로 제공되는\n신개념 책 읽기`}</S.Title>
            <S.SubTitle>{`방송 중이라면 언제든 접속하세요.\n수강신청, 수업예약 없이 편하게 수업참여가 가능해요.`}</S.SubTitle>
          </S.TitleContainer>
        </Fade>
        <S.ScreenContainer>
          <S.Pad
            src="images/LiveBookClass/padScreen.png"
            alt="big-screen-frame"
          />
          <S.FrameTop src="images/ReadingClass/frame.png" alt="pad-frame" />
          <S.FrameBottom src="images/ReadingClass/frame.png" alt="pad-frame" />
          <S.Picture
            src="images/ReadingClass/bookPicture.png"
            alt="book-picture"
          />
          <S.Kids src="images/ReadingClass/kids.png" alt="kids" />
          <S.SmallScreen
            src="images/ReadingClass/smallScreen.png"
            alt="small-screen"
          />
        </S.ScreenContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ReadingClass;
