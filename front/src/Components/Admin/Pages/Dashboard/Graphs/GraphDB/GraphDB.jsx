import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Styles from "./GraphDB.module.scss";
import { useEffect, useState } from "react";



function GraphDB(props){
    useEffect(()=>{
        let root;
        let chart;
        
        let data = props.data;
        console.log(props.data);
        let yAxis;
        let xAxis;
        let series;
        console.log(props.type);
        switch(Number(props.type)){
            case 1:
                
                root = am5.Root.new(props.widget); 

                

                chart = root.container.children.push( 
                am5xy.XYChart.new(root, {
                    panY: false,
                    layout: root.verticalLayout
                }) 
                );

                // Define data
                
                //props.data;
                //console.log(data);
                
                // [{
                // "year": "2021",
                // "count": 3,
                // }, {
                // "year": "2022",
                // "count": 4,
                // }, {
                // "year": "2023",
                // "count": 6,
                // },{
                //     "year": "2024",
                //     "count": 7,
                // }]

                // Craete Y-axis
                yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {})
                })
                );

                // Create X-Axis
                xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    maxDeviation: 0.2,
                    renderer: am5xy.AxisRendererX.new(root, {}),
                    categoryField: "year"
                })
                );
                xAxis.data.setAll(data);

                // Create series
                function createSeries(name, field) {
                let series = chart.series.push( 
                    am5xy.LineSeries.new(root, { 
                    name: name,
                    xAxis: xAxis, 
                    yAxis: yAxis, 
                    valueYField: field, 
                    categoryXField: "year",
                    }) 
                );
                series.strokes.template.setAll({
                    strokeWidth: 3,
                    strokeDasharray: [10,5]
                });
                series.fills.template.setAll({
                    fillOpacity: 0.5,
                    visible: true
                });
                series.data.setAll(data);
                }

                createSeries("Users", "count");
        

                return () => {
                    root.dispose();
                };
            case 2:
                console.log(222)
                root = am5.Root.new(props.widget); 

                root.setThemes([
                am5themes_Animated.new(root)
                ]);

                chart = root.container.children.push( 
                am5xy.XYChart.new(root, {
                    panY: false,
                    wheelY: "zoomX",
                    layout: root.verticalLayout
                }) 
                );

                

                // Craete Y-axis
                yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {
                    })
                })
                );

                // Create X-Axis
                xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    maxDeviation: 0.2,
                    renderer: am5xy.AxisRendererX.new(root, {
                    }),
                    categoryField: "year"
                })
                );
                xAxis.data.setAll(data);

                // Create series
                series = chart.series.push( 
                am5xy.ColumnSeries.new(root, { 
                    name: "Series", 
                    xAxis: xAxis, 
                    yAxis: yAxis, 
                    valueYField: "count", 
                    categoryXField: "year",
                    tooltip: am5.Tooltip.new(root, {})
                }) 
                );
                series.data.setAll(data);


                

                return () => {
                    root.dispose();
                };
        }
        
    }, []);

    
    
    return (
        <div className={Styles.chardivWrap}>
            
            <div id={props.widget} className={Styles.chartdiv}></div>
            
        </div>
    )

}

export default GraphDB;