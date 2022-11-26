import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useRef, useLayoutEffect } from 'react';
import { useEffect } from "react";
import Requests from "../../../Requests";
import { useState } from "react";
import Style from './Graph.module.scss';



function Graph(){

    

    let [dataGraph, setDataGraph] = useState([]);

     useEffect(()=>{


        Requests({
            method: 'get', 
            url: '/orders',
            callback: onOrdersRequest
        });
    },[]);

    function onOrdersRequest(request){

        request.map(element => 
            element.date = new Date(element.date).getTime()
        );
        
        let copy = Object.assign({}, dataGraph);
        copy = request;
        setDataGraph(copy);



        let root = am5.Root.new("chartdiv");
    
        root.setThemes([
            am5themes_Animated.new(root)
          ]);

        
        
          
          // Create chart
          // https://www.amcharts.com/docs/v5/charts/xy-chart/
          var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panX: true,
              panY: true,
              wheelX: "panX",
              wheelY: "zoomX"
            })
          );
          
          var easing = am5.ease.linear;
          
          // Create axes
          // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
          var xAxis = chart.xAxes.push(
            am5xy.GaplessDateAxis.new(root, {
              maxDeviation: 0.1,
              groupData: false,
              baseInterval: {
                timeUnit: "day",
                count: 1
              },
              renderer: am5xy.AxisRendererX.new(root, {
                minGridDistance: 50
              }),
              tooltip: am5.Tooltip.new(root, {})
            })
          );
          
          var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              maxDeviation: 0.1,
              renderer: am5xy.AxisRendererY.new(root, {})
            })
          );
          
          // Add series
          // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
          var series = chart.series.push(
            am5xy.LineSeries.new(root, {
              minBulletDistance: 10,
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              valueXField: "date",
              tooltip: am5.Tooltip.new(root, {
                pointerOrientation: "horizontal",
                labelText: "{valueY}"
              })
            })
          );
          
          series.data.setAll(copy);
          
          series.bullets.push(function () {
            return am5.Bullet.new(root, {
              sprite: am5.Circle.new(root, {
                radius: 5,
                fill: series.get("fill"),
                stroke: root.interfaceColors.get("background"),
                strokeWidth: 2
              })
            });
          });
          
          // Add cursor
          // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
          var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            xAxis: xAxis
          }));
          cursor.lineY.set("visible", false);
          
          // add scrollbar
          chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
          }));
          
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          series.appear(1000, 100);
          chart.appear(1000, 100);
    
        return () => {
          root.dispose();
        };
    }   

    useLayoutEffect(() => {

        
    
      }, []);

    

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    



    return (
        <div>
            Graph

            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    );
}

export default Graph;