let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  cartTotal += price;
  updateCart();
}

function removeFromCart(index) {
  const removedItem = cartItems.splice(index, 1)[0];
  cartTotal -= removedItem.price;
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(index));
    li.appendChild(removeButton);
    
    cartItemsElement.appendChild(li);
  });

  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.innerText = `Total: $${cartTotal}`;
}