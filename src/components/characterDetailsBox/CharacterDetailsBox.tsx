import classes from "./CharacterDetailsBox.module.scss";
import { characterInfo } from 'utility/Types';
import { useTranslation, Trans } from 'react-i18next';
import Button from "components/button/Button";

const CharacterDetailsBox = (props:any) => {
  
  const { t, i18n } = useTranslation();
  const characterData:characterInfo = props.characterData;

  return (
      <div className={classes.container}  >
        <p>  <strong><Trans>Name</Trans>:</strong> {characterData.name}  </p>
        <p>  <strong><Trans>Nickname</Trans>:</strong> {characterData.nickname}  </p>
        <p>  <strong><Trans>Birthday</Trans>:</strong> {characterData.birthday}  </p>
        <p>  <strong><Trans>Occupation</Trans>:</strong> {characterData?.occupation?.join(", ")}  </p>
        <p>  <strong><Trans>Status</Trans>:</strong> {characterData.status}  </p>
        <p>  <strong><Trans>Appearance</Trans>:</strong> {characterData?.appearance?.join(", ")}  </p>
        <p>  <strong><Trans>Portrayed</Trans>:</strong> {characterData.portrayed}  </p>
        <p>  <strong><Trans>Category</Trans>:</strong> {characterData.category}  </p>
        <p className={classes.quote}>  <strong><Trans>Random quote</Trans>:</strong>{(props.authorQuote != "EMPTY") ? <><em>{props.authorQuote}</em><Button text={t("Update quote")} onClick={props.updateQuote} /> </> : <em><Trans>No quotes available</Trans></em> }
        </p>
      </div>
  );
}

export default CharacterDetailsBox;
