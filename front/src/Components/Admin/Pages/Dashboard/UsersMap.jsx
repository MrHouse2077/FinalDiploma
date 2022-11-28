import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
import { useEffect, useState } from "react";
import Requests from "../../.././Requests";


function UsersMap(){

    useEffect(()=>{
        Requests({
                    method: 'get', 
                    url: '/get-users',
                    callback: CountryInfoCB,
                });
    }, []);

    
    
    function CountryInfoCB(request){
        
        let countryInfo = [];
        let flag = true;
        request.map(function(item){
            
            for (let code of countryInfo){
                
                if(code == item.countryCode){
                    flag = false;
                    
                }
            }
            if(flag){
                countryInfo.push(item.countryCode)
            }
            
            
        });
        
        //Map---------------------------------
        const root = am5.Root.new("chartdiv"); 

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "none",
                panY: "none",
                wheelY: "none",
                projection: am5map.geoNaturalEarth1()
            })
        );
        let backgroundSeries = chart.series.unshift(
            am5map.MapPolygonSeries.new(root, {})
          );
          
          backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color(0xE0FFFF),
            stroke: am5.color(0xd4f1f9),
          });
          
          backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
          });

        
        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"], 
                fill: am5.color(0x6694DD),
            })
        );
        

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            templateField: "polygonSettings",
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x4169E1),
            
        });   
        

        let countrySettings = [];
        countryInfo.forEach(function(code){
            
            countrySettings.push({
                id: ""+code+"",
                polygonSettings: {
                    fill: am5.color(0xFF6347)
                }
            });
            
        }) 
        

        polygonSeries.data.setAll(countrySettings); 
        //MapEnd----------------------------------------
        

    };

    

    
    return (
        <div>
            
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    )

}

export default UsersMap;