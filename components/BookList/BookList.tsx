import React from 'react';
import * as S from './BookList.style';
import BookSlider from './BookSlider';

const BookList = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.Title>{`입학 전 1000권 읽기!\n땅콩스쿨로 도전해보세요.`}</S.Title>
          <S.SubTitle>
            {`매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`}
          </S.SubTitle>
        </S.TitleContainer>
        <BookSlider />
      </S.Container>
    </S.Wrapper>
  );
};

export default BookList;
