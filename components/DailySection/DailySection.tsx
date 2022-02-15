import * as S from './DailySection.style';
import Fade from 'react-reveal/Fade';

const DailySection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Fade bottom>
          <S.Title>
            매일 매일
            <br />
            알아서 기록하는 독서 일기
          </S.Title>
        </Fade>
        <S.SubTitle>
          오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를
          통해 확인해보세요.
          <br />
          읽기만 해도 자동으로 기록되고, 공유도 가능해요.
        </S.SubTitle>
        <S.ContentWrap>
          <S.ImgWrap>
            <S.Img src="/images/DailySection/img1.png" />
            <S.Img src="/images/DailySection/img3.png" />
          </S.ImgWrap>
          <S.CenterPhone src="/images/DailySection/centerPhone.png" />
          <S.ImgWrap>
            <S.Img src="/images/DailySection/img2.png" />
            <S.Img src="/images/DailySection/img4.png" />
          </S.ImgWrap>
        </S.ContentWrap>
      </S.Wrapper>
    </S.Container>
  );
};

export default DailySection;
