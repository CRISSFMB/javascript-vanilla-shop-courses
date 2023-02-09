export function checkItemsCart() {
  const cartTbodyContainer = document.querySelector("#list-cart tbody");
  const buttonRemoveCart = document.querySelector("#removeItems");

  if (cartTbodyContainer.children.length === 0) {
    buttonRemoveCart.textContent = "Ihr habt noch keine Kurse";
  } else {
    buttonRemoveCart.textContent = "alle Kurse entfernen";
  }
}
