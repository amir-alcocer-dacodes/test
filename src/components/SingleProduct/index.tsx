import React from "react";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import AddToCart from "../AddToCart";
import "./style.css";
import { IProduct } from "../HOC/Products";

interface SingleProps {
  product: IProduct;
  onAddCart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SingleProduct: React.FC<SingleProps> = (props: SingleProps) => {
  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Grid container justify="center">
        <Grid item sm={6} xs={12} container justify="center">
          <img className="single-image" src={props.product.image as string} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className="single-title" variant="h1">
                {props.product.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1} mt={1} p={1} boxShadow={1}>
                <Grid container justify="space-between">
                  <Typography variant="h4">
                    ${props.product.price} USD
                  </Typography>
                  <AddToCart
                    product={props.product}
                    onAddCart={props.onAddCart}
                  />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography className="single-description">
                {props.product.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SingleProduct;
