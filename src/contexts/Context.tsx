import React, { useState, createContext } from 'react';

export const Context = createContext({
    searchString: "",
    setItemsFilter: (filter:any) => {},
});

export const ContextProvider = (props:any) => {
    const [searchString,setSearchString] = useState("");    
    
    const setItemsFilter = (filter:any)=>{   
        if(filter)
          filter =  filter.toString().toLowerCase();
        setSearchString(filter); 
    }


    return(    <Context.Provider value={{searchString: searchString,   setItemsFilter: setItemsFilter  }}>{props.children}</Context.Provider>);    
}

