import * as S from './TagItem.style';

interface TagItemProps {
  id: number;
  icon: string;
  title: string;
  content: string;
}

const TagItem: React.FC<TagItemProps> = ({ id, icon, title, content }) => {
  return (
    <S.TagItem>
      <S.TagRing ringId={id} />
      <S.TagBack>
        <S.TagImg src={icon} />
        <S.TagTitle>{title}</S.TagTitle>
        <S.TagContent>{content}</S.TagContent>
      </S.TagBack>
    </S.TagItem>
  );
};

export default TagItem;
