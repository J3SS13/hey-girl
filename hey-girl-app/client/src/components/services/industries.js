import axios from 'axios';


async function getIndustries(){
  const resp = await axios({
    url: '/industries'
    });
  console.log(resp);
  return resp.data;
}


export {getIndustries}
