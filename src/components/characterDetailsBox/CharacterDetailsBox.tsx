import classes from "./CharacterDetailsBox.module.scss";
import { characterInfo } from 'utility/Types';
const CharacterDetailsBox = (props:any) => {
  const characterData:characterInfo = props.characterData;

  return (
      <div className={classes.container}  >
        <p>  <strong>name:</strong> {characterData.name}  </p>
        <p>  <strong>nickname:</strong> {characterData.nickname}  </p>
      </div>
  );
}

export default CharacterDetailsBox;
