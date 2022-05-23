import React  from 'react'
import Item from 'components/item/Item';
import classes from "./ItemsContainer.module.scss";
import { useNavigate } from 'react-router-dom';

const ItemsContainer = (props:any) => {
  const navigate = useNavigate();
  
  return (
    <div className={classes.container} >
      { (props.list?.length) ? props.list.map((el:any)=> <Item key={el.char_id}  image={el.img} nickname={el.nickname} name={el.name}  onClick={ ()=>  navigate(`/details/${el.char_id}`)}   />) 
       : (<p>No Characters found</p>)     }
     </div>
  );
}

export default ItemsContainer;
