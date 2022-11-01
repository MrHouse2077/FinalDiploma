import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Requests from "../../../Requests";


function Dashboard(){
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
            Dashboard
        </div>
    );
}

export default Dashboard;