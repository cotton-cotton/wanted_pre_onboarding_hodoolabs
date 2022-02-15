import styled from 'styled-components';

export const TagItem = styled.div`
  position: relative;
  margin: 0 20px;
`;

export const TagBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 550px;
  background-image: url('/images/FeatureSection/tagBack.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  filter: drop-shadow(30px 0px 30px rgba(0, 0, 0, 0.05));
`;

export const TagRing = styled.div<{ ringId: number }>`
  position: absolute;
  width: 54px;
  height: 152px;
  top: -93px;
  left: ${props => (props.ringId === 2 ? '160px' : '145px')};
  background: ${props =>
    `url('/images/FeatureSection/tagRing${props.ringId}.png')`};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 10;
`;

export const TagImg = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;
`;

export const TagTitle = styled.h1`
  margin: 52px 0px 30px 0px;
  font-weight: bold;
  font-size: 30px;
  line-height: 32px;
`;

export const TagContent = styled.h2`
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  padding: 0 50px;
`;
