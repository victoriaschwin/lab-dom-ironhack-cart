// ITERATION 1

function updateSubtotal(product) {
  let price = document.querySelector('.price span');
  let quantity = document.querySelector('.quantity input');

  let subtotal = price.innerHTML * quantity.value;

  let subtotalSpan = document.querySelector('.subtotal span');

  subtotalSpan.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  let products = [...document.getElementsByClassName('product')];

  let totalPrice = 0;
  products.forEach((product) => (totalPrice += updateSubtotal(product)));

  let total = document.querySelector('#total-value span');
  total.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log('The target in remove is:', target);

  let cart = document.querySelector('#cart tbody');
  cart.removeChild(target.parentElement.parentElement);
}

// ITERATION 5

function createProduct() {
  let products = document.querySelectorAll('.create-product td input');
  console.log(products)
  let name = document.querySelector(".product-name").value;
  let price = document.querySelector(".product-price").value;
  let row = document.createElement('tr');
  row.className = 'product';

  let content = `<td class="name">
                      <span>${name}</span>
                  </td>
                  <td class="price">$<span>${price}</span></td>
                  <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                  </td>
                  <td class="subtotal">$<span>0</span></td>
                  <td class="action">
                      <button class="btn btn-remove">Remove</button>
                  </td>`;

  row.innerHTML += content;

  let button = row.getElementsByTagName('button')[0];
  button.addEventListener('click', removeProduct);
  let body = document.querySelector('#cart tbody');
  body.appendChild(row);

  document.querySelector(".product-name").value = 'Product Name'
  document.querySelector(".product-price").value = 0;
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let button = document.getElementsByClassName('btn btn-remove');
  [...button].forEach((button) =>
    button.addEventListener('click', removeProduct)
  );

  let create = document.getElementById('create');
  create.addEventListener('click', createProduct);
});
