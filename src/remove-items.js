import { checkItemsCart } from "./check-item-cart.js";

export function removeItems() {
  const cartTbodyContainer = document.querySelector("#list-cart tbody");
  cartTbodyContainer.innerHTML = "";
  checkItemsCart();
}
