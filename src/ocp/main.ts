import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './classes/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Blusa', 29.9));
shoppingCart.addItem(new Product('Sapato', 129));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
