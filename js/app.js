// varibles

let listCourses = [];

// cart

const cart = document.querySelector("#cart");
const buttonRemoveCart = document.querySelector("#removeItems");
const cartTbodyContainer = document.querySelector("#list-cart tbody");

// courses

const listCoursesContainer = document.querySelector("#list-courses");

initPrograma();

function initPrograma() {
  listCoursesContainer.addEventListener("click", addCourse);
  checkItemsCart();
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

  listCourses = [...listCourses, dataCourseSelect];

  createHtml(listCourses);
}

function createHtml(list) {
  cleanHTML();
  list.forEach((item) => {
    const { img, title, price, amount, id } = item;
    const tr = document.createElement("tr");
    tr.innerHTML = `
       <td> <img src=${img} width="100" /></td>
        <td> <p>${title}</p></td>
         <td>
         <p>${price}</p>
         </td>
          <td>
         <p>${amount}</p>
         </td>
         <td>
           <a href="#" class="icon-remove" data-id=${id}> x </a>
         </td>
    `;

    cartTbodyContainer.appendChild(tr);
  });

  checkItemsCart();
}

function cleanHTML() {
  // slow
  //   cartTbodyContainer.innerHTML = "";
  // fast

  while (cartTbodyContainer.firstChild) {
    cartTbodyContainer.removeChild(cartTbodyContainer.firstChild);
  }
}

function removeItems() {
  cartTbodyContainer.innerHTML = "";
  checkItemsCart();
}

function checkItemsCart() {
  if (cartTbodyContainer.children.length === 0) {
    buttonRemoveCart.textContent = " your dont have still courses";
  } else {
    buttonRemoveCart.textContent = " remove all courses";
  }
}

function removeItem(e) {
  if (e.target.classList.contains("icon-remove")) {
    const anchor = e.target;
    const id = anchor.getAttribute("data-id");
    listCourses = listCourses.filter((el) => el.id !== id);
    createHtml(listCourses);
  }
}

buttonRemoveCart.addEventListener("click", removeItems);

cartTbodyContainer.addEventListener("click", removeItem);
