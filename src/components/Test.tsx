export interface TestProps {
  title: string;
}

export default function Test({ title }: TestProps) {
  return (
    <h1>
      <a href="./test">{title}</a>
    </h1>
  );
}
