import React, {useContext, useState, useEffect} from 'react'
import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./CharactersView.module.scss";
import { Context } from "contexts/Context"; 
import { getAPI } from 'utility/callsAPI';

const CharactersView = () => {
  const defcontext = useContext(Context); 
  const [list, setList] = useState([]);
    
  const getCharactersList = async () => {
      const data = await getAPI("/api/characters"); 
      setList(data);
    }

  useEffect(()=>{
    getCharactersList();    
  },[]); 
  
  console.log("list:",list);
  
  return (
    <section className={classes.container} >
          <TitleBar title="Characters List Page" />
          {(list?.length) && <ItemsContainer list={(defcontext.searchString) ? list.filter((el:any) => (el.nickname.toLowerCase() == defcontext.searchString) ||  (el.name.toLowerCase() == defcontext.searchString) ) : list } /> }
     </section>
  );
}

export default CharactersView;