import React, { useState } from 'react';
import * as S from './SelectBooks.style';
import Fade from 'react-reveal/Fade';

const SelectBooks = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Fade right>
          <S.TitleContainer>
            <S.Title>{`교육 전문가들이\n선정한 도서`}</S.Title>
            <S.SubTitle>{`호두랩스의 교육 전문가들이\n교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를\n직접 선정해요!`}</S.SubTitle>
          </S.TitleContainer>
          <S.ItemContainer>
            <S.Item>
              <S.Check src="images/SelectBooks/firstCheck.gif" alt="check" />
              <S.Book src="images/SelectBooks/firstBook.png" alt="book" />
            </S.Item>
            <S.Item>
              <S.Check src="images/SelectBooks/secondCheck.gif" alt="check" />
              <S.Book src="images/SelectBooks/secondBook.png" alt="book" />
            </S.Item>
            <S.Item>
              <S.Check src="images/SelectBooks/thirdCheck.gif" alt="check" />
              <S.Book src="images/SelectBooks/thirdBook.png" alt="book" />
            </S.Item>
          </S.ItemContainer>
        </Fade>
      </S.Container>
    </S.Wrapper>
  );
};

export default SelectBooks;
