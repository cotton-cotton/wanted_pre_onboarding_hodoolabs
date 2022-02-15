import * as S from './Banner.style';
import Fade from 'react-reveal/Reveal';

const Banner = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Fade bottom>
          <S.Logo src="images/Banner/animationLogo.gif" alt="Logo-animation" />
          <S.Title>땅콩스쿨이란?</S.Title>
          <S.Description>{`실시간(LIVE)으로, 아이들이 좋아하는 캐릭터 선생님을 통해,\n 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.`}</S.Description>
        </Fade>
      </S.Container>
    </S.Wrapper>
  );
};

export default Banner;
