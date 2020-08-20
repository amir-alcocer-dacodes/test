import React from "react";
import {
  AppBar as Bar,
  Toolbar,
  Typography,
  Avatar,
  Badge,
} from "@material-ui/core";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { CartContext, ICartContext } from "../context/Cart";

const AppBar: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { cartList } = React.useContext<ICartContext>(CartContext);

  return (
    <Bar position="static">
      <Toolbar>
        <Typography
          onClick={() => props.history.push("/")}
          style={{ cursor: "pointer" }}
          variant="body1"
        >
          MyStore
        </Typography>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <Avatar
              style={{
                height: 18,
                width: 18,
                fontSize: 12,
                backgroundColor: "white",
                color: "black",
              }}
            >
              {cartList.length.toString()}
            </Avatar>
          }
          style={{ marginLeft: "auto" }}
        >
          <Avatar
            onClick={() => props.history.push("/cart")}
            style={{ cursor: "pointer" }}
          >
            <LocalGroceryStoreIcon />
          </Avatar>
        </Badge>
      </Toolbar>
    </Bar>
  );
};

export default withRouter(AppBar);
