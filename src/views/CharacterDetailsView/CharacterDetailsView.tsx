import React, { useContext, useState, useEffect } from 'react'
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./CharacterDetailsView.module.scss";
import { Context } from "contexts/Context";
import { getAPI } from 'utility/callsAPI';
import { useParams } from "react-router-dom";
import CharacterDetailsBox from 'components/characterDetailsBox/CharacterDetailsBox';
import { characterInfo } from 'utility/Types';

const CharacterDetailsView = () => {
  const defcontext = useContext(Context);
  let { id } = useParams();
  const [characterData, setCharacterData] = useState<characterInfo>();

  const getCharacterDetails = async () => {
      let url = `/api/characters/${id}`;
      const data = await getAPI(url);
      if(data?.length)
        setCharacterData(data[0]);
  } 

  useEffect(() => {
    getCharacterDetails();
  }, []);
  
  return (
    <section className={classes.container} >
      <TitleBar title="Character Details" btText="Back" btPath="/" />
      {(characterData) ? (
        <div className={classes.boxesContainer}>
          <figure className={classes.imageContainer} >
            <img src={characterData.img} /> 
          </figure>
          <div>
          <CharacterDetailsBox characterData={characterData} />
          </div> 
        </div>)
        : (<p>Waiting for datas...</p>)
      }
    </section>
  );
}

export default CharacterDetailsView;
