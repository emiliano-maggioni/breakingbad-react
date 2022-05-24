import React, { useContext, useState, useEffect } from 'react'
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./CharacterDetailsView.module.scss";
import { getAPI } from 'utility/callsAPI';
import { useParams } from "react-router-dom";
import CharacterDetailsBox from 'components/characterDetailsBox/CharacterDetailsBox';
import { characterInfo, quoteInfo } from 'utility/Types';

import { useTranslation } from 'react-i18next';
import Loader from 'components/loader/Loader';

const CharacterDetailsView = () => {  
  const { t, i18n } = useTranslation();
  let { id } = useParams();
  const [characterData, setCharacterData] = useState<characterInfo>();
  const [authorQuote, setAuthorQuote] = useState<quoteInfo | string>();

  const getCharacterDetails = async () => {
      let url = `/api/characters/${id}`;
      const data = await getAPI(url);
      if(data?.length)
        setCharacterData(data[0]);
  } 
  
  const getAuthorQuotes = async (author:string) => {
    let url = `/api/quote/random?author=${author}`;
    const data = await getAPI(url);
    if(data?.length)
      setAuthorQuote(data[0]?.quote);
    else
      setAuthorQuote("EMPTY");
} 

useEffect(() => {
  getCharacterDetails();
}, []);

useEffect(() => {
    if(characterData?.name)
      getAuthorQuotes(characterData?.name.replaceAll(' ', '+'));
}, [characterData]);

  return (
    <section className={classes.container} >
      <TitleBar title={t('Character Details')} btText={t("Back")} btPath="/" />
      {(characterData) ? (
        <div className={classes.boxesContainer}>
          <figure className={classes.imageContainer} >
            <img src={characterData.img} /> 
          </figure>
          <div>   
            { (authorQuote) && <CharacterDetailsBox characterData={characterData}  authorQuote={authorQuote} updateQuote={()=> getAuthorQuotes(characterData?.name.replaceAll(' ', '+'))} /> }         
          </div> 
        </div>)
        : (<Loader />)
      }
    </section>
  );
}

export default CharacterDetailsView;
