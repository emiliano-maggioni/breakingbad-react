
export const getUserInfo = () => {
    try{
        const json = localStorage.getItem("user_logged");
        if(json){
            return JSON.parse(json) as any;
        }
    } catch { }

    return null;
}

export const setUserInfo = (userData:any) => {
    localStorage.setItem("user_logged",JSON.stringify(userData));
}

export const clearStorage = () => {
    localStorage.removeItem("user_logged"); 
}