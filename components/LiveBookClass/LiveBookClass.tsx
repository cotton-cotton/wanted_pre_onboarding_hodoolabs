import React, { useState } from 'react';
import * as S from './LiveBookClass.style';
import Fade from 'react-reveal/Fade';

const LiveBookClass = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Fade bottom>
          <S.Description>
            <S.Title>{`랜선 라이브\n북클래스`}</S.Title>
            <S.SubTitle>
              {` 친구들과 함께\n 그림 그리기,퀴즈 풀기, \n 선생님과 대화하며 경험해요!`}
            </S.SubTitle>
          </S.Description>
          <S.ScreenContainer>
            <S.Screen src="images/LiveBookClass/padScreen.png" alt="screen" />
            <S.Video
              src="https://ddks-front-dev.s3.ap-northeast-1.amazonaws.com/media/main_video.ccd1f367.mp4"
              muted
              loop
              autoPlay
            ></S.Video>
          </S.ScreenContainer>
        </Fade>
      </S.Container>
    </S.Wrapper>
  );
};

export default LiveBookClass;
