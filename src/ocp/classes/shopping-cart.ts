import { CartItem } from './interfaces/cart.items';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((total, current) => total + current.price, 0);
  }
  totalWithDiscount(discount: number): number {
    return +(this.total() - this.total() * discount).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length == 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

/**
 * clear && npx ts-node --files --transpile-only "/home/tomas/Projects/Courses/solid-typescript-01/src/srp/shopping-cart.ts"
 */
