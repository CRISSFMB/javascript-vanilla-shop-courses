// varibles

// cart

const cart = document.querySelector("#cart");
const buttonRemoveCart = document.querySelector("#removeItems");
const cartTbodyContainer = document.querySelector("#list-cart tbody");

// courses

const listCoursesContainer = document.querySelector("#list-courses");

initPrograma();

function initPrograma() {
  listCoursesContainer.addEventListener("click", addCourse);
}

// functions

function addCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("addCart")) {
    const selectCourse = e.target.parentElement.parentElement;
    readDataCourse(selectCourse);
  }
}

function readDataCourse(selectCourse) {
  // selectCourse = card

  const img = selectCourse.querySelector("img").src;
  const title = selectCourse.querySelector("h4").textContent;
  const price = selectCourse.querySelector(".precio span").textContent;
  let anchor = selectCourse.querySelector("a");
  const id = anchor.getAttribute("data-id");
  const amount = 1;

  const dataCourseSelect = {
    img,
    title,
    price,
    id,
    amount,
  };

  addSelectCourse(dataCourseSelect);
}

function addSelectCourse(dataCourseSelect) {
  const tr = document.createElement("tr");
  const tdImagen = document.createElement("td");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");
  const tdAmount = document.createElement("td");
  const img = document.createElement("img");
  img.src = dataCourseSelect.img;
  const title = document.createElement("h4");
  title.textContent = dataCourseSelect.title;
  const price = document.createElement("p");
  price.textContent = dataCourseSelect.price;
  const amount = document.createElement("p");
  amount.textContent = dataCourseSelect.amount;
  tdName.appendChild(title);
  tdPrice.appendChild(price);
  tdAmount.appendChild(amount);
  tr.appendChild(tdImagen).appendChild(img);
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdAmount);

  cartTbodyContainer.appendChild(tr);
}
