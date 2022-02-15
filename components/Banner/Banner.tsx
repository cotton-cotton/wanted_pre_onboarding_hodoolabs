import * as S from './Banner.style';

const Banner = () => {
  return (
    <S.Wrapper>
      <S.Logo src="images/두번째-단-로고-애니메이션.gif" alt="Logo-animation" />
      <S.Title>땅콩스쿨이란?</S.Title>
      <S.Description src="images/두번째단 설명.png" alt="description" />
    </S.Wrapper>
  );
};

export default Banner;
