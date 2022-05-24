import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
  const navigate = useNavigate();
  
const lngs:any = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
};

const { t, i18n } = useTranslation();

  return (
    <header className={classes.container} >
      <div className={classes.topBar}>
        <figure className={classes.imgContainer} onClick={() => navigate("/")}  ><img src="/logo.png" /> </figure>
        <h1 onClick={() => navigate("/")} >Breaking Bad React</h1>
      </div>
      <div className={classes.bottomBar}>

       <strong><Trans>Language</Trans>:</strong>
          {Object.keys(lngs).map((lng) => (
            <span key={lng} className={(i18n.resolvedLanguage === lng) ? classes.btLangActive : classes.btLang }  onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </span>
          ))}
      </div>
    </header>
  );
}

export default Header;
