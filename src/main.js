import { checkItemsCart } from "./check-item-cart.js";
import { removeItem } from "./getDataCard.js";
import { removeItems } from "./remove-items.js";
import { selectCard } from "./select-card.js";

const buttonRemoveCart = document.querySelector("#removeItems");
const listCoursesContainer = document.querySelector("#list-courses");
const cartTbodyContainer = document.querySelector("#list-cart tbody");

initPrograma();
function initPrograma() {
  listCoursesContainer.addEventListener("click", selectCard);
  checkItemsCart();
}

buttonRemoveCart.addEventListener("click", removeItems);

cartTbodyContainer.addEventListener("click", removeItem);
