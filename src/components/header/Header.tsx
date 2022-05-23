import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.container} >
      <div className={classes.topBar}>
        <figure className={classes.imgContainer} onClick={() => navigate("/")}  ><img src="/logo.png" /> </figure>
        <h1 onClick={() => navigate("/")} >Breaking Bad React</h1>
      </div>
      <div className={classes.bottomBar}>
        LANGUAGE: <span onClick={() => navigate("/")} >EN</span>
      </div>
    </header>
  );
}

export default Header;
