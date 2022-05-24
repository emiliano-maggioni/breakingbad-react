import React  from 'react'
import classes from "./Button.module.scss";

const Button = (props:any) => {
 
  return (
    <button  className={classes.container} onClick={props.onClick} {...props} > {props.text}</button>
  );
}

export default Button;
