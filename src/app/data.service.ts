import { Injectable } from '@angular/core';


interface Product {
  name: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  inventory: Product[] = [
    {name: 'Milk', price: 10},
    {name: 'Milk', price: 10},
    {name: 'Milk', price: 10},
    {name: 'Sugar', price: 20},
    {name: 'Bread', price: 15},
    {name: 'Bread', price: 15},
    {name: 'Fish', price: 60},
    {name: 'Honey', price: 30},
    {name: 'Apple', price: 2},
    {name: 'Apple', price: 2},
    {name: 'Apple', price: 2},
    {name: 'Banana', price: 4},
    {name: 'Banana', price: 4},
    {name: 'Cornflakes', price: 25},

  ];
  cart: Product[] = [];

  constructor() { }
  getInventoryValue(): number {
    return this.inventory.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  }
  getCartValue(): number {
    return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  }




}
