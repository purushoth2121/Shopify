 const pricecart = document.getElementById("mycart")
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const confirmation = document.getElementById('confirmation');
  let total = 0;

  function show() {
    pricecart.style.display = "block";
  }

  function show1() {
    var message = document.getElementById("mycart")
    
    // message.style.display = "none";
    
  
    setTimeout(function () {
      message.style.display = "none";
    }, 4000);
  }

  function addToCart(name, price) {
    const li = document.createElement('li');
    li.textContent = `${name} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += price;
    cartTotal.textContent = total.toFixed(2);
  }

  function checkout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name && address && total > 0) {
      confirmation.textContent = `Thank you, ${name}. Your order has been placed!`;
      cartItems.innerHTML = '';
      cartTotal.textContent = '0.00';
      total = 0;
    } else {
      confirmation.textContent = 'Please fill in your details and add items to your cart.';
    }
  }