export interface TagProps {
  title: string;
  color: string;
}

function Tag({ title, color }: TagProps) {
  return (
    <div
      style={{ background: color }}
      className="border-radius-1 | padding-inline-2 padding-block-1 | text-center"
    >
      <p className="fs-100">{title}</p>
    </div>
  );
}

export default Tag;
