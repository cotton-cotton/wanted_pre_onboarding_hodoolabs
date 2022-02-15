import * as S from './CouponSection.style';

const CouponSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>지금 다운로드 받으세요!</S.Title>
        <S.Coupon>
          <S.CouponImg
            src="/images/CouponSection/couponImg.png"
            alt="couponimg"
          />
          <S.LeftSide>
            <S.Logo>
              <S.Img src="/images/CouponSection/couponLogo.png" />
            </S.Logo>
            <S.CouponTitle>
              책을 보는
              <br />
              새로운 방법
            </S.CouponTitle>
            <S.CouponSubTitle>
              지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!
            </S.CouponSubTitle>
          </S.LeftSide>
          <S.DashedLine />
          <S.RightSide>
            <S.btnAlert>
              회원가입에 걸리는 시간 단 3초!
              <S.btnArrow />
            </S.btnAlert>
            <S.DownloadBtn>
              <S.BtnImage src="/images/CouponSection/downloadBtn.png" />앱
              다운로드 하기
            </S.DownloadBtn>
          </S.RightSide>
        </S.Coupon>
      </S.Wrapper>
    </S.Container>
  );
};

export default CouponSection;
