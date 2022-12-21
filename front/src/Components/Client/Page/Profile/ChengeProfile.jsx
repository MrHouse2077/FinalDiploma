import { Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Styles from './Profile.module.scss';
import Requests from "../../../Requests";
import DefaultLayout from '../../../Layouts/DefaultLayout/DefaultLayout';
import Button from '../../../UI/Button/Button';
import Loader from '../../../Loader/Loader';
import InputText from '../../../UI/InputText/InputText';
import Validator from '../../../Validator';


function ChangeProfile(props){
    const navigate = useNavigate();
    let defChange = {
        user: props.user,
        fieldImg:{
            value: "http://localhost:8000/images/"+props.user.image,
            msgFaild: null,
            touched: true,
            valid: true,
        },
        fieldName: {
            flag : null,
            value: props.user.name,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Name is not correct!",
                    f: function(valueElement){
                        const min = 3;
                        const max = 100;
                        return (valueElement.length > min)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldLastName: {
            flag : null,
            value: props.user.last_name,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Last Name is not correct!",
                    f: function(valueElement){
                        const min = 3;
                        const max = 100;
                        return (valueElement.length > min)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldDescription: {
            flag : null,
            value: props.user.description,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Description is not correct!",
                    f: function(valueElement){ 
                        const min = 0;
                        const max = 254;
                        return (valueElement=== null || valueElement.lenght >= min 
                            || valueElement.length <= max)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
        fieldEmail: {
            flag : null,
            value: props.user.email,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Email is not correct!",
                    f: function(valueElement){
                        const regexp_email = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
                        return (regexp_email.test(valueElement))? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldPhone: {
            flag : null,
            value: props.user.phone_num,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Phone number is not correct!",
                    f: function(valueElement){
                        const regexp_email = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,11}$/;
                        return (regexp_email.test(valueElement))? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldGender: {
            flag : null,
            value: props.user.gender,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Gender is not correct!",
                    f: function(valueElement){
                        const male = "male";
                        const female = "female";
                        return (valueElement === male || valueElement === female)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldAge: {
            flag : null,
            value: props.user.age,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "You must be 18 years old!",
                    f: function(valueElement){
                        const min = 18;
                        const max = 100;
                        return (valueElement.lenght >= min 
                            && valueElement.length <= max)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldCity: {
            flag : null,
            value: props.user.adress,
            msgFaild: null,
            valid: true,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "City is not correct!",
                    f: function(valueElement){
                        const min = 2;
                        const max = 100;
                        return (valueElement.length > min && valueElement.length < max)? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
        formValid: false,
      }
    let [checkValues, checkSet] = useState(defChange);
      function saveState(data, fieldElement){
        console.log(data, fieldElement);
        let copy = Object.assign({}, checkValues);
        copy[fieldElement].value = data[fieldElement].value;
        copy[fieldElement].touched = data[fieldElement].touched;
        copy[fieldElement].valid = data[fieldElement].valid;
        copy[fieldElement].msgFaild = data[fieldElement].msgFaild;
        
        checkSet(copy);
      }
    function uploadImg(e){
        let target = e.target;

        let fileReader = new FileReader();
        fileReader.onload = () => {
            let copy = Object.assign({}, checkValues);
            copy.fieldImg.value = fileReader.result;
            checkSet(copy);

        }

        fileReader.readAsDataURL(target.files[0]);
        
    }
    function createObject(){
        if(checkValues.fieldImg.valid 
            && checkValues.fieldName.valid 
            && checkValues.fieldLastName.valid 
            && checkValues.fieldDescription.valid 
            && checkValues.fieldEmail.valid 
            && checkValues.fieldPhone.valid 
            && checkValues.fieldGender.valid 
            && checkValues.fieldAge.valid 
            && checkValues.fieldCity.valid){
          let objectForRequest = {
            image: checkValues.fieldImg.value,
            name: checkValues.fieldName.value,
            last_name: checkValues.fieldLastName.value,
            email: checkValues.fieldEmail.value,
            description: checkValues.fieldDescription.value,
            phone_num: checkValues.fieldPhone.value,
            gender: checkValues.fieldGender.value,
            age: checkValues.fieldAge.value,
            adress: checkValues.fieldCity.value,
          };
          sendREqChange(objectForRequest);
        }
    }
    function sendREqChange(user){
        Requests(
            {
                method:'post', 
                url: "/changeUser",
                data: {user: user, id: props.user.id},
                callback: props.checkReq
            }
        );
    }
    function CancelCnange(){
        let copy = Object.assign({}, checkValues);
        copy = defChange;
        checkSet(copy);
        let copyProfile = Object.assign({}, props.dataProfile);
        copyProfile.chenge = false;
        props.setProfile(copyProfile);

    }
    return (
        <div className={Styles.ChangeProfile+" wrap"}>
            <div className={Styles.flexWrap}>
                <h2 className={Styles.title}>Chage Profile</h2>
                <div className={Styles.imageCH}>
                    <input type="file" accept=".png, .jpg, .jpeg" id="inputGroupFile02" onChange = {(e)=>{
                            uploadImg(e)
                        }}  
                    />
                    <label htmlFor="inputGroupFile02">
                        <div>
                            {(checkValues.fieldImg.valid)?<img src={checkValues.fieldImg.value} alt=""/> : ""}
                        </div>
                        <div className={Styles.iconImg}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                    </label>
                    <h3 className={Styles.About}>About me</h3>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Name: </span>
                        <InputText 
                            defaultValue={props.user.name}
                            type="text" 
                            placeholder="Enter name" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldName",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldName",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldName.valid && checkValues.fieldName.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldName.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldName}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>LastName: </span>
                        <InputText 
                            defaultValue={props.user.last_name}
                            type="text" 
                            placeholder="Enter last name" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldLastName",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldLastName",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldLastName.valid && checkValues.fieldLastName.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldLastName.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldLastName}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Description: </span>
                        <InputText 
                            defaultValue={props.user.description}
                            type="text" 
                            placeholder="Enter description" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldDescription",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldDescription",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldDescription.valid && checkValues.fieldDescription.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldDescription.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldDescription}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Email: </span>
                        <InputText 
                            defaultValue={props.user.email}
                            type="text" 
                            placeholder="Enter email" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldEmail",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldEmail",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldEmail.valid && checkValues.fieldEmail.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldEmail.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldEmail}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Phone: </span>
                        <InputText 
                            defaultValue={props.user.phone_num}
                            type="text" 
                            placeholder="Enter Phone" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldPhone",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldPhone",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldPhone.valid && checkValues.fieldPhone.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldPhone.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldPhone}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Gender: </span>
                        <select>
                            <option>Slelect your gender</option>
                            {(props.user.gender ===  "female")? <option selected  value="female">female</option> : <option value="female">female</option>}
                            {(props.user.gender ===  "male")? <option selected  value="male">male</option> : <option value="male">male</option>}
                        </select>
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>Age: </span>
                        <InputText 
                            defaultValue={props.user.age}
                            type="text" 
                            placeholder="Enter Age" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldAge",
                                event: evt.target.value,
                                checkValues: Number(checkValues),
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldAge",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldEmail.valid && checkValues.fieldEmail.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldEmail.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldEmail}

                        />
                    </div>
                    <div className={Styles.InputWrap}>
                        <span className={Styles.InputName}>City: </span>
                        <InputText 
                            defaultValue={props.user.adress}
                            type="text" 
                            placeholder="City email" 
                            onChange = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldCity",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            onBlur = {(evt)=>{
                            Validator(
                                {
                                fieldElement: "fieldCity",
                                event: evt.target.value,
                                checkValues: checkValues,
                                callback: saveState,
                                }
                            )
                            }}
                            className = {
                                (!checkValues.fieldCity.valid && checkValues.fieldCity.touched)
                                ?
                                    Styles.error
                                :
                                    (checkValues.fieldCity.valid)
                                    ?
                                    Styles.succes
                                    :
                                    ""
                            }
                            checkValues = {checkValues.fieldCity}

                        />
                    </div>
                </div>
            </div>
            <div className={Styles.Buttongroup}>
                <Button  onClick={CancelCnange} className={Styles.chenge}>Cancel Cnange</Button>
                {(checkValues.fieldImg.valid 
            && checkValues.fieldName.valid 
            && checkValues.fieldLastName.valid 
            && checkValues.fieldDescription.valid 
            && checkValues.fieldEmail.valid 
            && checkValues.fieldPhone.valid 
            && checkValues.fieldGender.valid 
            && checkValues.fieldAge.valid 
            && checkValues.fieldCity.valid)?<Button onClick={createObject} disabled className={Styles.save}>Save Cnange</Button> : ""} 
            </div>
        </div>
    );
}
export default ChangeProfile;