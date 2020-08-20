import React from "react";
import { IProduct } from "../components/HOC/Products";

export interface ICartContext {
  setCartList: (product: IProduct[]) => void;
  cartList: IProduct[];
}

export const CartContext = React.createContext<ICartContext>({
  cartList: [],
  setCartList: (product: IProduct[]) => {},
});
