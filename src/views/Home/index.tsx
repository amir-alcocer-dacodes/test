import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";
import ProductInfo, { CardLoader } from "../../components/Card";
import {
  withProducts,
  ProductProps,
  IProduct,
} from "../../components/HOC/Products";

const Home: React.FC<ProductProps & RouteComponentProps> = (
  props: ProductProps & RouteComponentProps
) => {
  return (
    <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Grid container>
        {props.products.map((product: IProduct) => (
          <Grid item md={3} sm={6} xs={12}>
            <ProductInfo
              onClick={() => props.history.push(`product/${product.id}`)}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
        {props.products.length === 0 &&
          [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3].map((item) => (
            <Grid item md={3} sm={6} xs={12} style={{ padding: 1 }}>
              <CardLoader />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
export default withProducts(withRouter(Home) as any);
