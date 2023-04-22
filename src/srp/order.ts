import { OrderStatus } from './interfaces/order.status';
import { Messaging } from './messaging';
import { Persistency } from './persistence';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.cart.total()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
