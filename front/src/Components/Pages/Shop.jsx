import Requests from "../Requests";


function Shop(props) {
  let stateApp = props.stateApp;


    function onLk(){
      Requests(
        {
            method:'post', 
            url: "/lk",
            data: {token: stateApp.token},
            callback: access
        }
      )
    }

    function access(data){
      console.log(data);
    } 

    return (
      <div className="Shop">
        Shop

        <button onClick={onLk}>войти в лк</button>
      </div>
    );
  }
  
  export default Shop;
  