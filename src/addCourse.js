const addCourse = () => {
  if (productExist(listCourses, dataCourseSelect)) {
    listCourses = listCourses.map((course) => {
      if (course.id === dataCourseSelect.id) {
        course.amount++;
        return course;
      } else {
        return course;
      }
    });
  } else {
    listCourses = [...listCourses, dataCourseSelect];
  }
};
