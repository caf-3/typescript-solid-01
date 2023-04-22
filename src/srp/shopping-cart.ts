import { CartItem } from './interfaces/cart.items';
import { OrderStatus } from './interfaces/order.status';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return this._items.reduce((total, current) => total + current.price, 0);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length == 0;
  }

  sendMessage(message: string): void {
    console.log(`Mensagem enviada: ${message}`);
  }
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

/**
 * clear && npx ts-node --files --transpile-only "/home/tomas/Projects/Courses/solid-typescript-01/src/srp/shopping-cart.ts"
 */
