import { Route, Routes } from 'react-router-dom'
import CharactersView from "views/CharactersView/CharactersView";
import CharacterDetailsView from "views/CharacterDetailsView/CharacterDetailsView";

const Routing = () => { 

  return (
      <Routes>
        <Route path='/details/:id' element={<CharacterDetailsView />} />  
        <Route path='/' element={<CharactersView />} />      
      </Routes>
  );
}

export default Routing;
