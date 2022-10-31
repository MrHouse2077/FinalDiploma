import axios from 'axios';
/*let paramenrs{
              method, 
              url, 
              data
            }*/

let domen = "http://localhost:8000";
let APIversion = "api/v1"

function Request(parametrsRequest){
  switch(parametrsRequest.method){
    case 'get': 
      getRequest(parametrsRequest.url)
      break;
    case 'post':
      postRequest(parametrsRequest.url, parametrsRequest.data)
    break;
    default: console.log("error request"); break;
  }

  function getRequest(url){
    axios({
      method: 'get',
      "url": '${APIversion}${domen}/${url}',
      responseType: 'json'
    })
      .then(function (response) {
        console.log(responce.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function postRequest(url, data ){
    axios({
      method: 'post',
      "url": url,
      "data": data,
      responseType: 'json'
    })
      .then(function (response) {
        console.log(responce.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } 
}
export default Request;