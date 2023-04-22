import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Blusa', price: 29.9 });
shoppingCart.addItem({ name: 'Sapato', price: 129 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
