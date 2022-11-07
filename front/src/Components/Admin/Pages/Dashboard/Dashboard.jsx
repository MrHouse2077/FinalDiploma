import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Requests from "../../../Requests";
// import './Style.css';

import classNames from 'classnames';
import AddCategory from "./AddCategory";
import Loader from "../../../Loader/Loader";



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

            <div>Dashboard
            {console.log(props)}
                <AddCategory/>
                <Loader/>
            </div>
    );
}

export default Dashboard;