import axios from 'axios';


async function getIndustries(){
  const resp = await axios({
    url: '/industries'
    });
  return resp.data;
}


export {getIndustries}
