import Tag, { TagProps } from './Tag';

interface TagsListProps {
  tags: TagProps[];
}

function TagsList({ tags }: TagsListProps) {
  return (
    <div className="flex-group | flex-group-gap-1">
      {tags
        .filter((tag) => tag.title.length > 0)
        .map((tag) => {
          const { title, color } = tag;
          return <Tag key={title} title={title} color={color} />;
        })}
    </div>
  );
}

export default TagsList;
