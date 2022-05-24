import { CircularProgress } from "@mui/material";
import classes from "./Loader.module.scss";

const Loader = () => {
 
  return (
    <div  className={classes.container}>
      <CircularProgress  className={classes.spinnerBase} />
  </div>
  );
}

export default Loader;
