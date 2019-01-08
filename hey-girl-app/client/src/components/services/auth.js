//register, login(store in local storage), logout(delete from local storage)


//get user name age get token, set token //jwt decode - npm install , Loggen boolean in state
// set item in local storage:  localStorage.setItem("jwt", value)  localStorage.removeItem("jwt")
//getItem  to retrieve token


import axios from 'axios';

async function login(creds){
    const token = await axios.post('/user_token',
        {
          "auth": creds
        });
    console.log(token.data);
    return token.data
}

export {
  login,
}
