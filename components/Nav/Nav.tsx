import React, { useState, useEffect } from 'react';
import * as S from './Nav.style';

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    if (scrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <S.NavContainer
      style={scrollActive ? { background: 'white' } : { background: 'none' }}
    >
      <S.Content>
        <S.TitleContainer
          style={scrollActive ? { color: 'black' } : { color: 'white' }}
        >
          <S.TitleLogo src="images/Main/logo.png" alt="Logo-img" />
          <S.Title>땅콩스쿨</S.Title>
        </S.TitleContainer>
        <S.ListContainer
          style={scrollActive ? { color: 'black' } : { color: 'white' }}
        >
          <S.List>도서구매</S.List>
          <S.List>장바구니</S.List>
          <S.List>마이페이지</S.List>
          <S.Line></S.Line>
          <S.List>이용권 관리</S.List>
          <S.List>로그인/회원가입</S.List>
        </S.ListContainer>
      </S.Content>
    </S.NavContainer>
  );
};

export default Nav;
