import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { CartContext, ICartContext } from "../../context/Cart";
import AddToCart from "../../components/AddToCart";
import ProductInfo from "../../components/Card";
import { IProduct } from "../../components/HOC/Products";

const Cart: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { cartList } = React.useContext<ICartContext>(CartContext);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Grid container direction={isMobile ? "column-reverse" : "row"}>
        {cartList.length === 0 ? (
          <Grid container justify="center">
            <Typography variant="h5">
              Aún no hay productos en su carrito
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid
              item
              md={9}
              sm={9}
              xs={12}
              container
              style={{
                height: isMobile ? "65vh" : "85vh",
                overflowY: "auto",
              }}
            >
              {cartList.map((product: IProduct, index: number) => (
                <Grid
                  key={index}
                  item
                  md={3}
                  sm={6}
                  xs={12}
                  style={{ position: "relative" }}
                >
                  <ProductInfo
                    onClick={() => {}}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                  <div style={{ position: "absolute", right: 10, top: 10 }}>
                    <AddToCart product={product} onAddCart={(e: any) => {}} />
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Typography variant="body1">
                {cartList.length > 1
                  ? `${cartList.length} productos`
                  : `${cartList.length} producto`}
              </Typography>
              <Typography variant="h6">
                {`Total: $ ${cartList
                  .reduce((prev: number, next: IProduct) => {
                    return prev + (next.price as number);
                  }, 0)
                  .toFixed(2)} USD`}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default withRouter(Cart);
