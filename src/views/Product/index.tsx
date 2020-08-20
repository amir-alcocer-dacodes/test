import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import SingleProduct from "../../components/SingleProduct";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IProduct } from "../../components/HOC/Products";
import { Skeleton } from "@material-ui/lab";
import { CartContext, ICartContext } from "../../context/Cart";

const LoaderSkeleton = () => (
  <Container maxWidth="md" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <Skeleton variant="rect" style={{ height: "50vh", width: "100%" }} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Skeleton variant="rect" style={{ height: 40, width: "100%" }} />
        <Skeleton
          variant="rect"
          style={{ marginTop: 5, height: 60, width: "100%" }}
        />
        <Skeleton
          variant="rect"
          style={{ marginTop: 5, height: 150, width: "100%" }}
        />
      </Grid>
    </Grid>
  </Container>
);

const ProductView: React.FC<RouteComponentProps<{ id: string }>> = (
  props: RouteComponentProps<{ id: string }>
) => {
  const [product, setProduct] = React.useState<IProduct | undefined>(undefined);
  const [loading, setLoading] = React.useState<Boolean>(true);
  const [error, setError] = React.useState<Boolean>(false);
  const { setCartList } = React.useContext<ICartContext>(CartContext);

  const getProduct = async () => {
    try {
      setError(false);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${props.match.params.id}`,
        {
          method: "GET",
        }
      );
      const __products: IProduct = await response.json();
      setProduct(__products);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [props.match.params.id]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {!loading ? (
            !error ? (
              <SingleProduct
                product={product as IProduct}
                onAddCart={() => {
                  props.history.push("/");
                }}
              />
            ) : (
              <Typography style={{ textAlign: "center" }} variant="h1">
                Ha ocurrido un error
              </Typography>
            )
          ) : (
            <LoaderSkeleton />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(ProductView);
