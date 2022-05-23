import React  from 'react'
import classes from "./Item.module.scss";

const Item = (props:any) => {
  return (
      <figure className={classes.container} onClick={props.onClick} >
        <img src={props.image} />
        <figcaption><strong>{props.nickname} {props.name}</strong></figcaption> 
      </figure>
  );
}

export default Item;
