import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal.jsx";
import Button from "../../../UI/Button/Button.jsx";
import Select from "../../../UI/Select/Select.jsx";
import GraphDB from "./Graphs/GraphDB/GraphDB.jsx";


import Requests from "../../../Requests";
// import './Style.css';

import classNames from 'classnames';
import AddCategory from "./AddCategory";
import Loader from "../../../Loader/Loader";
import Styles from "./Dashboard.module.scss";
import Nina from "../../../../images/Nina.jpg";
import Logo from "../../../../images/brand-white.svg"


// import { FontAwesomeIcon } from '@fortawesomereact-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Graph from "../Graph/Graph";

import UsersMap from "./UsersMap";
import AdminTemplate from "../AdminTemplate/AdminTemplate";
import { StockPanel } from "@amcharts/amcharts5/.internal/charts/stock/StockPanel.js";


function Dashboard(props){

    let [modalActive, setModalActive] = useState(false);


    let [isOpenGrph, setOpened] = useState([
            {isOpenGrphWH1: false, 
                optionTab: 1,
                optionType: '1',
                textarea: '',},
            {isOpenGrphWH2: false,
                optionTab: 1,
                optionType: '1',
                textarea: '',},
            {isOpenGrphWH3: false,
                optionTab: 1,
                optionType: '1',
                textarea: '',},
    ]);

    

    let [currentWid, setCurWid] = useState(null);
    let [dropWid, setDropWid] = useState(null);
    let [dataForGraph, setDataForGraph] = useState([
        {
            "year": "2019",
            "count": 0,
        }, 
        {
            "year": "2020",
            "count": 0,
        }, 
        {
            "year": "2021",
            "count": 0,
        },
        {
            "year": "2022",
            "count": 0,
    }]);

   
    useEffect(()=>{
        
        let data = {'email': localStorage.getItem('email')};
        Requests({
            method: 'post', 
            url: '/usersWidgetsRd',
            data: data,
            callback: usersWidgetsRdRq,
        });
        
        getUsersTable();



    }, [])
    function usersWidgetsRdRq(data){
        console.log(data);
        if(data != ' '){
            setOpened(data);
        }
        
        
    }
    

    function dragOverHandler(evt){
        evt.preventDefault();
        if(evt.target.className == Styles.widget){
            
            evt.target.style.boxShadow = "0 4px 3px gray";
        }
    }   

    function dragLeaveHandler(evt){
        evt.target.style.boxShadow = "none";
    }  

    function dragStartHandler(evt){
        setCurWid(evt.target);
    }  

    function dragEndHandler(evt){
        evt.target.style.boxShadow = "none";
    }  

    function dropHandler(evt){
        evt.target.style.boxShadow = "none";
        evt.preventDefault();
        if(currentWid.className == Styles.widget+' graph'){
            setModalActive(true);
        }
        setDropWid(evt.target);
        
    }  

    function usersWidgetsWrRq(data){
        
    }

    function getUsersTable(){
        Requests({
            method: 'get', 
            url: '/getUsersTabel',
            callback: getUsersTabelRq,
        });
    }

    

    function getUsersTabelRq(data){
        let counters = {
            count2019: 0,
            count2020: 0,
            count2021: 0,
            count2022: 0,
        };
        data.map(function(item){
            if(new Date(item.created_at).getFullYear() == 2019){
                counters.count2019++;
            }
            if(new Date(item.created_at).getFullYear() == 2020){
                counters.count2020++;
            }
            if(new Date(item.created_at).getFullYear() == 2021){
                counters.count2021++;
            }
            if(new Date(item.created_at).getFullYear() == 2022){
                counters.count2022++;
            }
        })

        let copy = Object.assign([], dataForGraph);
        copy.map(function(item){
            if(item.year == "2019"){
                item.count = counters.count2019;
            }
            if(item.year == "2020"){
                item.count = counters.count2020;
            }
            if(item.year == "2021"){
                item.count = counters.count2021;
            }
            if(item.year == "2022"){
                item.count = counters.count2022;
            }
        })
        setDataForGraph(copy);

    }

    function getTbForGraph(){

        getUsersTable();

        
        if(currentWid.className == Styles.widget+' graph'){
            
            if(dropWid.className == Styles.widget+' widgetHead1'){
                let copy = Object.assign([], isOpenGrph);
                copy[0].isOpenGrphWH1 = true;
                setOpened(copy);
            }
            if(dropWid.className == Styles.widget+' widgetHead2'){
                let copy = Object.assign([], isOpenGrph);
                copy[1].isOpenGrphWH2 = true;
                setOpened(copy);
                
            }
            if(dropWid.className == Styles.widget+' widgetHead3'){
                let copy = Object.assign([], isOpenGrph);
                copy[2].isOpenGrphWH3 = true;
                setOpened(copy);
                
            }
            
            let jsonIsOpenGraph = JSON.stringify(isOpenGrph);
            console.log(isOpenGrph);
            let data = {
                'jsonIsOpenGraph': jsonIsOpenGraph,
                'email': localStorage.getItem('email'),
            }
            Requests({
                method: 'post', 
                url: '/usersWidgetsWr',
                data: data,
                callback: usersWidgetsWrRq,
            });


        }

        setModalActive(false);
        
    }
    function saveState(data, fieldElement){
        
        let copy = Object.assign([], isOpenGrph);
        
        if(currentWid.className == Styles.widget+' graph'){
            
            if(dropWid.className == Styles.widget+' widgetHead1'){
                copy[0][fieldElement] = data;
                setOpened(copy);
            }
            if(dropWid.className == Styles.widget+' widgetHead2'){
                copy[1][fieldElement] = data;
                setOpened(copy);
                console.log(data);
            }
            if(dropWid.className == Styles.widget+' widgetHead3'){
                copy[2][fieldElement] = data;
                setOpened(copy);
            }
        }
      };

   return(
    <div>
        <AdminTemplate></AdminTemplate>
        <div className={Styles.wrap}>
            <div className={Styles.widgetsPositions}>
             <div className={Styles.posHead}>
                                    
                <div 
                    onDragOver={(evt) => dragOverHandler(evt)}
                    onDragLeave={(evt) => dragLeaveHandler(evt)}
                    onDrop={(evt) => dropHandler(evt)}
                    className={classNames(Styles.widget, 'widgetHead1')}
                >
                    <p className={Styles.widgetText}>Place 1</p>
                    {isOpenGrph.map(item =>
                        item.isOpenGrphWH1 && (
                            <GraphDB type={item.optionType} data={dataForGraph} widget="head1"/>
                            
                        ))
                    }
                </div>
                <div 
                    onDragOver={(evt) => dragOverHandler(evt)}
                    onDragLeave={(evt) => dragLeaveHandler(evt)}
                    onDrop={(evt) => dropHandler(evt)}
                    className={classNames(Styles.widget, 'widgetHead2')}
                >
                    <p className={Styles.widgetText}>Place 2</p>
                    {isOpenGrph.map(item =>
                        item.isOpenGrphWH2 && (
                            <GraphDB type={item.optionType} data={dataForGraph} widget="head2"/>
                        ))
                    }
                </div>
                
            </div>
                <div className={Styles.posFoot}>
                    <div 
                        onDragOver={(evt) => dragOverHandler(evt)}
                        onDragLeave={(evt) => dragLeaveHandler(evt)}
                        onDrop={(evt) => dropHandler(evt)}
                        className={classNames(Styles.widget, 'widgetHead3')}
                                            
                        >
                        <p className={Styles.widgetText}>Place big</p>
                        {isOpenGrph.map(item =>
                        item.isOpenGrphWH3 && (
                            <GraphDB type={item.optionType} data={dataForGraph} widget="foot1"/>
                        ))
                        }
                    </div>
                                  
                </div>
                  
            </div>
            <div className={Styles.widgets}>
                <div
                    onDragLeave={(evt) => dragLeaveHandler(evt)}
                    onDragStart={(evt) => dragStartHandler(evt)}
                    onDragEnd={(evt) => dragEndHandler(evt)}
                                                onDrop={(evt) => dropHandler(evt)}
                    className={classNames(Styles.widget, "graph")}
                    draggable={true}
                >
                    <p className={Styles.widgetText}>Graph</p>
                                                
                </div>
                <div
                    onDragLeave={(evt) => dragLeaveHandler(evt)}
                    onDragStart={(evt) => dragStartHandler(evt)}
                    onDragEnd={(evt) => dragEndHandler(evt)}
                                                onDrop={(evt) => dropHandler(evt)}
                    className={classNames(Styles.widget, "somel")}
                    draggable={true}
                >
                    <p className={Styles.widgetText}>Future</p>
                                                
                </div>
                              
            </div>
          
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <label for="selectionListModal1Wid" className="form-label">Таблица</label>
            <select className={classNames(Styles.selectionListModalWid, "form-select")} id="selectionListModalWid" onBlur= {(evt)=>{saveState(evt.target.value, 'optionTab')}}>
                <option disabled>Выберите таблицу</option>
                <option selected value="1">Users</option>
            </select>
            <label for="selectionListModal2Wid" className="form-label">Тип графика</label>
            <select className={classNames(Styles.selectionListModalWid, "form-select")} id="selectionListModal2Wid" onBlur= {(evt)=>{saveState(evt.target.value, 'optionType')}}>
                <option disabled>Выберите тип</option>
                <option selected value="1">Линии</option>
                <option  value="2">Гистограмма</option>
            </select>

            <button onClick={getTbForGraph} class="btn btn-primary">Применить</button>
        </Modal>
       
    </div>
    
    
   )
}

export default Dashboard;