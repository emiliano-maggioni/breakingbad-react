import React, { useState, useEffect} from 'react'
import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./CharactersView.module.scss";
import { getAPI } from 'utility/callsAPI';
import Loader from 'components/loader/Loader';
import { characterInfo } from 'utility/Types';
import { useTranslation } from 'react-i18next';

const CharactersView = () => {
  const { t, i18n } = useTranslation();
  const [list, setList] = useState<characterInfo[]>([]);
    
  const getCharactersList = async () => {
      const data = await getAPI("/api/characters"); 
      setList(data);
    }

  useEffect(()=>{
    getCharactersList();    
  },[]); 
  
  return (
    <section className={classes.container} >
      
          <TitleBar title={t('Characters List Page')} />         
          {(list.length > 0) ? <ItemsContainer list={ list } /> :  <Loader />}
     </section>
  );
}

export default CharactersView;