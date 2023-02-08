export function checkItemsCart() {
  const cartTbodyContainer = document.querySelector("#list-cart tbody");
  const buttonRemoveCart = document.querySelector("#removeItems");

  if (cartTbodyContainer.children.length === 0) {
    buttonRemoveCart.textContent = " your dont have still courses";
  } else {
    buttonRemoveCart.textContent = " remove all courses";
  }
}
