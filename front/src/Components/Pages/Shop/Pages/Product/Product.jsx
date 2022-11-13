import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Product(){

    let params = useParams();
    console.log(params);

    return (
        <div>
            Product
        </div>
    );
}

export default Product;