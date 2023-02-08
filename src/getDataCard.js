import { createHtml } from "./create-html.js";
import { productExist } from "./product-exist.js";

let listCourses = [];

export function getDataCard(selectCourse) {
  // selectCourse = card
  const img = selectCourse.querySelector("img").src;
  const title = selectCourse.querySelector("h4").textContent;
  const price = selectCourse.querySelector(".precio span").textContent;
  let anchor = selectCourse.querySelector("a");
  const id = anchor.getAttribute("data-id");
  let amount = 1;

  // create information card

  const dataCourseSelect = {
    img,
    title,
    price,
    id,
    amount,
  };

  addCourse(dataCourseSelect);
  createHtml(listCourses);
}

function addCourse(dataCourseSelect) {
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
}

export function removeItem(e) {
  if (e.target.classList.contains("icon-remove")) {
    const anchor = e.target;
    const id = anchor.getAttribute("data-id");
    listCourses = listCourses.filter((el) => el.id !== id);
    createHtml(listCourses);
  }
}
