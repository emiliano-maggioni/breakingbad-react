import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.breakingbadapi.com/",
});

instance.interceptors.request.use((config) => {
    config.headers!["Content-Type"] = "application/json";
     return config;
},
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use((res: any) => res, (error: any) => error );

 //FUNCTION TO MAKE GET API
 export const getAPI = (path:string) => {

  return instance.get(path).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{      
     return "ERROR";
  });

}

 //FUNCTION TO MAKE POST API
 export const postAPI = (path:string,payload:any) => {

  return instance.post(path,payload).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{      
      return "ERROR";
  });

}