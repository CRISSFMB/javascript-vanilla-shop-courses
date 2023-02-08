export const productExist = (listCourses, dataCourseSelect) => {
  return listCourses.some((el) => el.id === dataCourseSelect.id);
};
