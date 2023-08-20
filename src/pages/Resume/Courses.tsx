import Post from '../../components/Post/Post';

import courses from '../../assets/data/resume/courses';

function Courses() {
  return (
    <Post.Section id="courses">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#courses" className="link">
            Selected courses
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        <div className="courses-container">
          <ul>
            {courses.map((course) => {
              return (
                <li key={course.title} className="course">
                  <a href={course.link} target="_blank" rel="noreferrer">
                    <h4 className="h4 course-title">{course.title}</h4>
                    <p className="course-name">:{course.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Post.Body>
    </Post.Section>
  );
}

export default Courses;
