import React from "react";

export interface ProductProps {
  products: IProduct[];
}

export interface IProduct {
  category: String;
  description: String;
  id: Number;
  image: String;
  price: Number;
  title: String;
}

export const withProducts = <P extends ProductProps>(
  Component: React.ComponentType<P>
): React.ComponentType<Pick<P, Exclude<keyof P, keyof ProductProps>>> => {
  return class extends React.Component<
    Pick<P, Exclude<keyof P, keyof ProductProps>>,
    { products: IProduct[] }
  > {
    state = {
      products: [],
    };

    getProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products/`,
          {
            method: "GET",
          }
        );
        const __products: IProduct[] = await response.json();
        this.setState({ products: __products });
      } catch (error) {
        console.error(error);
      }
    };

    componentDidMount() {
      this.getProducts();
    }

    render() {
      return (
        <Component {...(this.props as P)} products={this.state.products} />
      );
    }
  };
};
