import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Requests from "../../../Requests";


function Dashboard(props){
    const navigate = useNavigate();
    useEffect(() => {

        
        
        let token = localStorage.getItem('token');

        if(!token){
            navigate('/login');
        }

        //Requests()

    });

    return (
        <div>
            {console.log(props)}
            Dashboard
        </div>
    );
}

export default Dashboard;