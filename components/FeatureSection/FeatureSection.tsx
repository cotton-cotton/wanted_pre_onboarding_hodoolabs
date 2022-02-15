import TagItem from './TagItem';
import { TAG_ITEM } from '../../shared/constants';
import * as S from './FeatureSection.style';
import Fade from 'react-reveal/Fade';

const FeatureSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Fade bottom>
          <S.Title>땅콩스쿨만의 특징</S.Title>
        </Fade>
        <S.TagsWrap>
          {TAG_ITEM.map(el => {
            return (
              <TagItem
                key={el.id}
                id={el.id}
                icon={el.icon}
                title={el.title}
                content={el.content}
              />
            );
          })}
        </S.TagsWrap>
      </S.Wrapper>
    </S.Container>
  );
};

export default FeatureSection;
