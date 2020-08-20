import React from "react";
import { Grid, Typography, Chip } from "@material-ui/core";
import "./style.css";
import { Skeleton } from "@material-ui/lab";

interface CardProps {
  image: String;
  title: String;
  description: String;
  price: Number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div
        className="square"
        style={{ backgroundImage: `url(${props.image})` }}
        onClick={props.onClick}
      >
        <Chip
          label={`$ ${props.price}`}
          style={{ backgroundColor: "white" }}
          className="price"
        />
        <div className="card-body">
          <Typography className="title">{props.title}</Typography>
          <Typography className="description">{props.description}</Typography>
        </div>
      </div>
    </>
  );
};

export const CardLoader = () => (
  <Skeleton className="square" variant="rect" height="auto" />
);

export default Card;
