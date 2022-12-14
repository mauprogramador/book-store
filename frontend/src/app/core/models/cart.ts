import { BookDto } from "./book";

export class CartDto {
  id!: string;
  total!: number;
  books!: CartItem[];
  deliveryFee!: number;
}

export interface CartItem {
  book: BookDto;
  quantity: number;
}