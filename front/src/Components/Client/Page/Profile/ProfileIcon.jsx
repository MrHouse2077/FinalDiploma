import { NavLink } from "react-router-dom";
import Styles from './Profile.module.scss';
import { useState } from "react";
import { useEffect } from "react";
import Requests from "../../../Requests";
function ProfileIcon(props){
    let [dataProfileIcon, setCartIcon] = useState({
        login: null,
        name: null,
        token: null,
        status: 0,
    });
    function getDataUser(data){
            let copy = Object.assign({}, dataProfileIcon);
            copy.login = data.data.user.email;
            copy.name = data.data.user.name;
            copy.token = data.data.token
            copy.status = 200;
            setCartIcon(copy);
    }
    function getAuthClient(){
        if(localStorage.getItem('tokenClient') !== undefined){
            Requests(
                {
                    method:'post', 
                    url: "/chekToken",
                    data: {token: localStorage.getItem('tokenClient')},
                    callback: getDataUser
                }
            );
        }
    }
    useEffect(() => {
        getAuthClient();
    }, []);
    return (
        <div className={Styles.ProfileIcon}>
            {
                (dataProfileIcon.status == 0)? 
                <NavLink to="/user/login" className={Styles.nav_link}>
                    <img src="http://localhost:8000/images/not_user.jpg" width="30" height="30" alt="" /> 
                    <span>log in</span> 
                </NavLink>
                :   <NavLink to={"/profile/user/"+dataProfileIcon.token} className={Styles.nav_link}>
                        <img src="http://localhost:8000/images/not_user.jpg" width="30" height="30" alt="" />  
                    </NavLink>
            }
        </div>
    );
}
export default ProfileIcon;