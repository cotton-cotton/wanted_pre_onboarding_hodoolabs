import * as S from './ReviewSection.style';
import ReviewSlider from './ReviewSlider';

const ReviewSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ReviewWrap>
          <S.ProfileGroup>
            <S.ProfileImg>
              <S.Img src="/images/ReviewSection/profileImg.png" />
            </S.ProfileImg>
            <S.AnimationImg>
              <S.Img src="/images/ReviewSection/ddangkong.png" />
            </S.AnimationImg>
          </S.ProfileGroup>
          <ReviewSlider />
        </S.ReviewWrap>
        <S.StatusBar />
      </S.Wrapper>
    </S.Container>
  );
};

export default ReviewSection;
