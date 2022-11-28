function Sorting(props) {
    function sendSortingMethod(method){
        props.getSortingMethod(method);
    }
    return (
      <div>
        <p>Сортировать по:</p>
        <select name="sortSelect" id="" onChange={(evt)=>{
            sendSortingMethod(evt.target.value);
        }}>
            { (props.active === "priceUp")? 
            <option value="priceUp" selected >цене возрастающей</option>
            : <option value="priceUp" >цене возрастающей</option>}
            { (props.active === "priceDown")? 
            <option value="priceDown" selected>цене убывающей</option>:
            <option value="priceDown" >цене убывающей</option>}
            { (props.active === "alphabetUp")? 
            <option value="alphabetUp" selected>алфавиту возрастающему</option>:
            <option value="alphabetUp">алфавиту возрастающему</option>}
            { (props.active === "alphabetDown")? 
            <option value="alphabetDown" selected>алфавиту убывающему</option>:
            <option value="alphabetDown">алфавиту убывающему</option>}
        </select>
      </div>
    );
  }
  
  export default Sorting;
  