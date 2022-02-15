import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftSide>
          <S.CompanyName>(주) 호두랩스</S.CompanyName>
          <S.Content>
            대표 : 김민우 | 사업자등록번호 : 431-88-01287
            <S.UnderLine>사업자 정보 조회</S.UnderLine>
            <br />
            서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)
            <br />
            제주특별시 서귀포시 중정로 86, 304
            <br />
            통신판매업 신고번호 : 2019-서울강남-00301호
            <br />
            <br />© Hodoo Labs. ALL RIGHTS RESERVED
          </S.Content>
        </S.LeftSide>
        <S.RightSide>
          <S.Content>고객센터&nbsp;&nbsp;&nbsp;&nbsp;채팅상담</S.Content>
          <S.Content>
            이용약관 <S.BoldContent>개인정보 처리방침</S.BoldContent> 환불정책
          </S.Content>
          <S.SocialWrap>
            <S.SocialCircle>
              <S.SocialImg src="/images/FooterSection/instagram.png" />
            </S.SocialCircle>
            <S.SocialCircle>
              <S.SocialImg src="/images/FooterSection/blog.png" />
            </S.SocialCircle>
          </S.SocialWrap>
        </S.RightSide>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
