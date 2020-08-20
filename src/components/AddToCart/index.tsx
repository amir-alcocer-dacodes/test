import React from "react";
import { Tooltip, Avatar } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { CartContext, ICartContext } from "../../context/Cart";
import { IProduct } from "../HOC/Products";

interface Props {
  product: IProduct;
  onAddCart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AddToCart: React.FC<Props> = (props: Props) => {
  const { cartList, setCartList } = React.useContext<ICartContext>(CartContext);
  const isInCart =
    cartList.findIndex((product: IProduct) => props.product.id === product.id) >
    -1;
  const remove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const index = cartList.findIndex(
      (product: IProduct) => props.product.id === product.id
    );
    const _list = cartList;
    _list.splice(index, 1);
    setCartList([..._list]);
    props.onAddCart(event);
  };
  const add = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const _list = cartList;
    _list.push(props.product);
    setCartList(_list);
    props.onAddCart(event);
  };
  return (
    <Tooltip title={isInCart ? "Remover de carrito" : "Agregar a carrito"}>
      <Avatar style={{ cursor: "pointer" }} onClick={isInCart ? remove : add}>
        {isInCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
      </Avatar>
    </Tooltip>
  );
};

export default AddToCart;
