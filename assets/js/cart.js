const cartListHTML = document.querySelector('.cart-container');

const productsCart = JSON.parse(localStorage.getItem('products-cart')) || [];


const handleRenderCart = () => {
  cartSize = productsCart.length || 0;
  let htmls ='';
  for(let i=0; i<cartSize; i++) {
    htmls += ('<li>' + productsCart[i].name + '</li>');
  }
  cartListHTML.innerHTML = htmls;
}

window.addEventListener("load", (event) => {
  handleRenderCart();
});