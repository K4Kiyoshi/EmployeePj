
  export const nameCheck = (name) =>{

    let namechk = /^[a-z ,.'-]+$/i;
    if(name.match(namechk)){
        return true;
    }else return false;
  
}

export const nullcheck = (i) =>{
    if(i === null || i === "" || i.length <= 0) {
        return false;
    }else return true;
}


let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const emailCheck = (email) => {
    if(email.match(emailFormat)){
        return true;
    }
    else return false;
}

 
let numberFormat=/(\d)(?=(\d{3})+$)/g;
export const numberCheck = (num) => {
    if(num.match(numberFormat)){
        return true;
    }else return false;
}