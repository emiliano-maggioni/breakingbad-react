
export const checkIfDataExpired = (dateExp:any) => {
    if(dateExp){
        const actual = new Date();
        let  diff = (dateExp.getTime() - actual.getTime()) / 1000;
        if(diff <= 0)
            return true;
        else
            return false;
    }
    else{
        return true; 
    }
};


