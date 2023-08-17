import Post from '../../components/Post/Post';

function Courses() {
  return (
    <Post.Section divider="down">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#experience" className="link">
            courses
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>courses</Post.Body>
    </Post.Section>
  );
}

export default Courses;
