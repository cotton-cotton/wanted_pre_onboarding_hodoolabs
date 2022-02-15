import { REVIEW_LIST } from '../../shared/constants';
import * as S from './ReviewSection.style';

const ReviewSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Btn>
          <S.Img src="/images/ReviewSection/prevBtn.png" />
        </S.Btn>
        <S.ReviewWrap>
          <S.ProfileGroup>
            <S.ProfileImg>
              <S.Img src="/images/ReviewSection/profileImg.png" />
            </S.ProfileImg>
            <S.AnimationImg>
              <S.Img src="/images/ReviewSection/ddangkong.png" />
            </S.AnimationImg>
          </S.ProfileGroup>
          <S.UserId>{REVIEW_LIST[0].userId}</S.UserId>
          <S.UserReview>{REVIEW_LIST[0].content}</S.UserReview>
        </S.ReviewWrap>
        <S.Btn>
          <S.Img src="/images/ReviewSection/nextBtn.png" />
        </S.Btn>
        <S.StatusBar />
      </S.Wrapper>
    </S.Container>
  );
};

export default ReviewSection;
