import { NavLink } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Contacts.module.scss";
import { useState } from "react";

import AboutShape from "../../../images/about-shape2.png";
import ContactShape3 from "../../../images/contact-shape3.png";
import CsSupport from "../../../images/cs-supporot-2.jpg";

import Requests from "../../Requests";
import InputText from "../../UI/InputText/InputText";
import Textarea from "../../UI/Textarea/Textarea";
import Button from "../../UI/Button/Button";
import Validator from "../../Validator";



import classNames from 'classnames';




function Contacts() {
    let [checkValues, checkSet] = useState({
        fieldName: {
            value: null,
            msgFaild: null,
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на минимальную длинну
                    minLength: 2,
                    msg: "Длина имени не должна быть меньше двух символов!",
                    f: function(valueElement){
                        return (valueElement.length >= this.minLength)? {status: true}: {status:false, msgFaild: this.msg};
                    }
                },
      
            ]
        },
        fieldEmail: {
            flag : null,
            value: null,
            msgFaild: null,
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Введите email!",
                    f: function(valueElement){
                        const regexp_email = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
                        return (regexp_email.test(valueElement))? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldMsg: {
            value: null,
            msgFaild: null,
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на минимальную длинну
                    minLength: 4,
                    msg: "Длина сообщения не должна быть меньше четырех символов!",
                    f: function(valueElement){
                        return (valueElement.length >= this.minLength)? {status: true}: {status:false, msgFaild: this.msg};
                    }
                },
      
            ]
        },
        formValid: false,
      });

      function saveState(data, fieldElement){
        
        let copy = Object.assign({}, checkValues);
        copy[fieldElement].value = data[fieldElement].value;
        copy[fieldElement].touched = data[fieldElement].touched;
        copy[fieldElement].valid = data[fieldElement].valid;
        copy[fieldElement].msgFaild = data[fieldElement].msgFaild;
    
        checkSet(copy);
      };

      function createObject(){
        if(checkValues.fieldName.valid && checkValues.fieldEmail.valid && checkValues.fieldMsg.valid){
          let objectForRequest = {
            name: checkValues.fieldName.value,
            email: checkValues.fieldEmail.value,
            msg: checkValues.fieldMsg.value,
          };
          return objectForRequest;
        }
      };

      function onFeedback(){
        let data = createObject();
        Requests(
            {
                method:'post', 
                url: "/feedback",
                data: {name: data.name, email: data.email, msg: data.msg},
                callback: feedbackBackRequest
            }
        )
            
        };

        function feedbackBackRequest(data){
           console.log(data);
        }
    return (
        <div>
      
            <DefaultLayout 
                title="Contacts"
            >
                    
                    
            </DefaultLayout>

            <section className={Styles.ContentContacts}>
                <div className={Styles.Contacts}>
                    <div className = {Styles.MapArea}>
                        
                        <div className={Styles.ContactMap}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14184006557!2d-77.0846156762382!3d38.89386718919168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sbd!4v1640853420661!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                    <div className = {Styles.ContactsInfo}>
                        <div className={classNames("container", Styles.customeContainer)}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                        <div className={Styles.svInner}>
                                            <div className={Styles.servicesIcon}>
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                        </div>
                                        <div className={Styles.ContactInfoText}>
                                            <h4 className={Styles.ContactInfoTitle}>Adress</h4>
                                            <p>
                                                <NavLink to = "https://goo.gl/maps/5x6EBHqoxu7xShyZ8" target="_blank" className={Styles.navLink}>
                                                    <span>
                                                        752 Settler, California
                                                    </span>

                                                </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                        <div className={Styles.svInner}>
                                            <div className={Styles.servicesIcon}>
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                        </div>
                                        <div className={Styles.ContactInfoText}>
                                            <h4 className={Styles.ContactInfoTitle}>Phone</h4>
                                            <p>
                                                <NavLink to = "tel:333888200" target="_blank" className={Styles.navLink}>
                                                    <span>
                                                    02 (365) 365 3625
                                                    </span>

                                                </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                        <div className={Styles.svInner}>
                                            <div className={Styles.servicesIcon}>
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                        </div>
                                        <div className={Styles.ContactInfoText}>
                                            <h4 className={Styles.ContactInfoTitle}>Email</h4>
                                            <p>
                                                <NavLink to = "mailto:info@feoxe4.com" target="_blank" className={Styles.navLink}>
                                                    <span>
                                                        info@feoxe4.com
                                                    </span>

                                                </NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={Styles.ContactShape}>
                            <img src = {AboutShape}/>
                        </div>
                    </div> 

                    <div className={classNames(Styles.supportArea)}>
                        <div className={classNames(Styles.customeContainer, "container")}>
                            <div className={classNames("row align-items-center")}>
                                <div className="col-lg-6">
                                    <div className={classNames(Styles.SupImage)}>
                                        <img src = {CsSupport}/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className={classNames(Styles.supportInfoTwo, "mb-35")}>
                                        <div className={classNames(Styles.SectionWrap, "mb-35")}>
                                            <span className={classNames(Styles.TpsubTitle)}>Customer support</span>
                                            <h3 className={classNames(Styles.SectionTitle, "mb-20")}>Dedicated supporting team ready for help you</h3>
                                            <span className={classNames(Styles.SectionBorder, "mb-30")}>
                                                <i className="far fa-circle"></i>
                                            </span>
                                        </div>
                                        <form action = "#">
                                            <div className={classNames(Styles.SupportFormField, "mb-20")}>
                                                <InputText 
                                                    type="text" 
                                                    placeholder="Введите имя" 
                                                    // onChange = {(evt)=>{
                                                    // // Validator(
                                                    // //     {
                                                    // //     fieldElement: "fieldName",
                                                    // //     event: evt.target.value,
                                                    // //     checkValues: checkValues,
                                                    // //     callback: saveState,
                                                    // //     }
                                                    // // )
                                                    // // }}
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
                                                            Styles.form_input
                                                    }
                                                    checkValues = {checkValues.fieldName}

                                                />
                                            </div>

                                            <div className={classNames(Styles.SupportFormField, "mb-20")}>

                                                <InputText 
                    
                                                    type="text" 
                                                    placeholder="Введите email" 
                                                    // onChange = {(evt)=>{
                                                    // Validator(
                                                    //     {
                                                    //     fieldElement: "fieldEmail",
                                                    //     event: evt.target.value,
                                                    //     checkValues: checkValues,
                                                    //     callback: saveState,
                                                    //     }
                                                    // )
                                                    // }}
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
                                                            Styles.form_input
                                                    }
                                                    checkValues = {checkValues.fieldEmail}

                                                />

                                            </div>
                                            <div className={classNames(Styles.SupportFormField, "mb-20")}>
                                                <Textarea
                                                    placeholder="Введите сообщение" 
                                                    // onChange = {(evt)=>{
                                                    // Validator(
                                                    //     {
                                                    //     fieldElement: "fieldMsg",
                                                    //     event: evt.target.value,
                                                    //     checkValues: checkValues,
                                                    //     callback: saveState,
                                                    //     }
                                                    // )
                                                    // }}
                                                    onBlur = {(evt)=>{
                                                    Validator(
                                                        {
                                                        fieldElement: "fieldMsg",
                                                        event: evt.target.value,
                                                        checkValues: checkValues,
                                                        callback: saveState,
                                                        }
                                                    )
                                                    }}
                                                    className = {
                                                        
                                                        (!checkValues.fieldMsg.valid && checkValues.fieldMsg.touched)
                                                        ?
                                                            Styles.error
                                                        :
                                                            (checkValues.fieldMsg.valid)
                                                            ?
                                                            Styles.succes
                                                            :
                                                            Styles.form_input
                                                    }
                                                    checkValues = {checkValues.fieldMsg}

                                                />
                                            </div>

                                            
                                                <Button 
                                                    onClick={ 
                                                        (checkValues.fieldName.valid && checkValues.fieldEmail.valid && checkValues.fieldMsg.valid)
                                                        ?
                                                        onFeedback
                                                        :
                                                        null
                                                        
                                                    }                                              
                                                    className={Styles.SupportBtn}

                                                >
                                                    <div className={Styles.TpBtnRound}>
                                                    Get Estimate
                                                    </div>
                                                    <i className="fal fa-chevron-double-right"></i>
                                                </Button>
                                            
                                        </form>
                                    </div>
                                </div>
                            

                            </div>

                        </div>
                        <div className={Styles.SupportShape}>
                            <img src = {ContactShape3}/>
                        </div>


                    </div>

                </div>                    
            </section>
        </div>
      
    );
  }
  
  export default Contacts;
  