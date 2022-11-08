import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
            
            Dashboard

            <NavLink to="/admin/add-product">
                Добавить продукт
            </NavLink>
        </div>
    );
}

export default Dashboard;