
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //... your code goes here
  let subtotal = price.innerHTML*quantity.value;

  let subtotalHolder = product.querySelector('.subtotal span');
  subtotalHolder.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let allProducts = document.querySelectorAll('.product');
  let sumOfProducts = 0;

  for(let i = 0; i < allProducts.length; i++){
    sumOfProducts += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerHTML = sumOfProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const row =  target.parentNode.parentNode;
  const parent = row.parentNode;

  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
function createProduct(event) {
  const target = event.currentTarget;
  console.log('The target is:', target);

  let table = document.querySelector('tbody');

  let newProduct = document.createElement('tr');
    newProduct.setAttribute('class','product');

  let newName = document.createElement('td');
    newName.setAttribute('class','name');
  let newNameText = document.createElement('span');
    newNameText.innerHTML = document.querySelector('.create-product td input').value;
  newName.appendChild(newNameText);
  newProduct.append(newName);

  let newPrice = document.createElement('td');
    newPrice.setAttribute('class','price');
    newPrice.innerHTML = "$";
  let priceAmt = document.createElement('span');
    priceAmt.innerHTML = document.querySelector('.create-product td+td input').value;
  newPrice.appendChild(priceAmt);
  newProduct.appendChild(newPrice);

  let newQuantity = document.createElement('td');
    newQuantity.setAttribute('class','quantity');
  let newInput = document.createElement('input');
    newInput.setAttribute('type','number');
    newInput.setAttribute('value','0');
    newInput.setAttribute('min','0');
    newInput.setAttribute('placeholder','Quantity');

  newQuantity.appendChild(newInput);
  newProduct.appendChild(newQuantity);

  let newSubtotal = document.createElement('td');
    newSubtotal.setAttribute('class','subtotal');
    newSubtotal.innerHTML = "$";
  let subtotalAmt = document.createElement('span');
    subtotalAmt.innerHTML = "0";
  newSubtotal.appendChild(subtotalAmt);
  newProduct.appendChild(newSubtotal);

  let newAction =  document.createElement('td');
  newAction.setAttribute('class','action');
  let newRemove = document.createElement('button');
    newRemove.setAttribute('class','btn btn-remove');
    newRemove.innerHTML = 'Remove';
    newRemove.addEventListener('click', removeProduct); 

  newAction.appendChild(newRemove);
  newProduct.appendChild(newAction);

  table.appendChild(newProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.product button');

  for(let button of removeButtons){
    button.addEventListener('click', removeProduct); 
  } 

  const createBtn = document.querySelector('.create-product button');
  createBtn.addEventListener('click', createProduct); 

});