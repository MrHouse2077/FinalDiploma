import { Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Styles from './Profile.module.scss';
import Requests from "../../../Requests";
import DefaultLayout from '../../../Layouts/DefaultLayout/DefaultLayout';
import Button from '../../../UI/Button/Button';
import Loader from '../../../Loader/Loader';
import ChangeProfile from './ChengeProfile';

function Profile(props){
    const navigate = useNavigate();
    let dataDefault = {
        login: null,
        name: null,
        token: null,
        user: {},
        status: 0,
        chenge: false,
        statusChange: null,
        msg: "",
    }
    let [dataProfile, setProfile] = useState(dataDefault);
    function renderInfoUser(){
        let infoUser = [];
        if(dataProfile.user.email !== null){
            infoUser.push(<span><span className={Styles.nameInfo}>Email:</span> {dataProfile.user.email}</span>);
        }
        if(dataProfile.user.phone_num !== null){
            infoUser.push(<span><span className={Styles.nameInfo}>Phone number:</span> {dataProfile.user.phone_num}</span>);
        }
        if(dataProfile.user.gender !== null){
            infoUser.push(<span><span className={Styles.nameInfo}>Gender:</span> {dataProfile.user.gender}</span>);
        }
        if(dataProfile.user.birthday !== null){
            infoUser.push(<span><span className={Styles.nameInfo}>Age:</span> {dataProfile.user.age}</span>);
        }
        if(dataProfile.user.gender.adress !== null){
            infoUser.push(<span><span className={Styles.nameInfo}>Adress:</span> {dataProfile.user.adress}</span>);
        }
        return infoUser.map((info, index)=><span key={index}>{info}</span>);
    }
    function getDataUser(data){
            let copy = Object.assign({}, dataProfile);
            if(data != null){
            copy.login = data.data.user.email;
            copy.name = data.data.user.name;
            copy.token = data.data.token;
            copy.user = data.data.user;
            }
            copy.status = data.code;
            setProfile(copy);
            if(data.code == 402){
                navigate('/user/login');
            }
    }
    function logout(){
        let copy = Object.assign({}, dataProfile);
        copy = dataDefault;
        setProfile(copy);
        props.logoutClient();
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
    function changeProfile(){
        let copy = Object.assign({}, dataProfile);
        copy.chenge = true;
        setProfile(copy);
    }
    function checkReq(data){
        let copy = Object.assign({}, dataProfile);
        copy.chenge = false;
        setProfile(copy);
        getAuthClient();
    }
    useEffect(() => {
        let token = localStorage.getItem('tokenClient');

        if(!token){
            navigate('/user/login');
        }
        getAuthClient();
    }, []);
    return(
        <DefaultLayout title="Profile">
           {(!dataProfile.chenge)?
                <div className={Styles.Profile+" wrap"}>
                    {(dataProfile.status == 201)?<div className={Styles.error}>Change Sucssefull</div>: (dataProfile.status == 401 )? <div className={Styles.error}>Change Error</div>: "" }
                    {(dataProfile.status == 200)?
                        <div className={Styles.ProfileWrap+" "+Styles.flexWrap}>
                            <div className={Styles.photo}>
                                <img src={"http://localhost:8000/images/"+dataProfile.user.image} width="200" height="200" alt="" />
                            </div>
                            <div className={Styles.desc}>
                                <h3>{dataProfile.name} {dataProfile.user.last_name}</h3>
                                <span className={Styles.nameInfo}>Description:</span>
                                <p>{dataProfile.user.description}</p>
                            </div>
                            <div className={Styles.info+" "+Styles.flexWrap}>
                                {renderInfoUser()}
                            </div>
                        </div>
                    :  (dataProfile.status == 402)? "": <Loader/>
                    }
                    {(dataProfile.status == 200)?
                        <div className={Styles.flexWrap}> 
                            <Button onClick={changeProfile} className={Styles.button+" "+Styles.Change}>Change profile</Button>
                            <Button  onClick={logout} className={Styles.button+" "+Styles.Logout}>Log out</Button>
                        </div>
                        : ""
                    }
                </div>
            :   (
                    <ChangeProfile user={dataProfile.user} checkReq={checkReq} dataProfile={dataProfile} setProfile={setProfile}/>
                )
            }
        </DefaultLayout>
    );
}
export default Profile;