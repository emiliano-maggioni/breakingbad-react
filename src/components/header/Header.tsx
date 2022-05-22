import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.container} >
      <div className={classes.topBar}>
        <figure className={classes.imgContainer} onClick={() => navigate("/")}  ><img src="/logo192.png" /> </figure>
        <span onClick={() => navigate("/")} >ReactJS Store</span>
      </div>
    </header>
  );
}

export default Header;
