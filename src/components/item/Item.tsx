import React  from 'react'
import classes from "./Item.module.scss";

const Item = (props:any) => {
  return (
      <figure className={classes.container} onClick={props.onClick} >
        <img src={props.image} />
        <figcaption><strong className={classes.nickname} >{props.nickname}</strong><span> {props.name}</span> </figcaption> 
      </figure>
  );
}

export default Item;
