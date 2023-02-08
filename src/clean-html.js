export function cleanHTML() {
  const cartTbodyContainer = document.querySelector("#list-cart tbody");
  // slow
  //   cartTbodyContainer.innerHTML = "";
  // fast

  while (cartTbodyContainer.firstChild) {
    cartTbodyContainer.removeChild(cartTbodyContainer.firstChild);
  }
}
