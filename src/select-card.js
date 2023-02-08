import { getDataCard } from "./getDataCard.js";

export function selectCard(e) {
  e.preventDefault();
  if (e.target.classList.contains("addCart")) {
    const selectCourse = e.target.parentElement.parentElement;

    getDataCard(selectCourse);
  }
}
