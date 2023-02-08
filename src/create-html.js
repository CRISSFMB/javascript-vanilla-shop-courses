import { checkItemsCart } from "./check-item-cart.js";
import { cleanHTML } from "./clean-html.js";

export function createHtml(list) {
  cleanHTML();
  const cartTbodyContainer = document.querySelector("#list-cart tbody");
  list.forEach((course) => {
    const { img, title, price, amount, id } = course;

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
