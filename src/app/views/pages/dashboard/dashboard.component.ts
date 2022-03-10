import { Component, OnInit } from '@angular/core';


import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexGrid,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexMarkers,
  ApexStroke,
  ApexLegend,
  ApexTooltip,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexResponsive,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from "ng-apexcharts";
import { DashboardService } from './dashoard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  nonAxisSeries: ApexNonAxisChartSeries;
  colors: string[];
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers,
  stroke: ApexStroke,
  legend: ApexLegend,
  responsive: ApexResponsive[],
  tooltip: ApexTooltip,
  fill: ApexFill
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  labels: string[],
  title: ApexTitleSubtitle
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  public barChartOptions: Partial<ChartOptions>;
  public barChartOptions2: Partial<ChartOptions>;
  public barChartOptions3: Partial<ChartOptions>;
  public radarChartOptions: Partial<ChartOptions>;

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;
  barChartData  :any = []
  data  :any = []
  data2  :any = []
  data3  :any = []
  stationName  :any = []
  radarData  :any = []
  consumptionData  :any = []
  labelRadarData : any = []
  dataOfRadar=null;
  constructor(private calendar: NgbCalendar , private dashboardService : DashboardService) {

  

  /**
     * Bar chart options
     */
   this.barChartOptions = {
    series: [],
    colors: ["#4d8af0"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      
      padding: {
        bottom: 0
      }
    },
   
    chart: {
      type: 'bar',
      height: '320',
      parentHeightOffset: 0
    },

    yaxis : {
      labels : {
        style : {
          fontWeight : '600',
          fontSize : '13px'
        }
      }
    },
    
    xaxis: {
      type: 'category',
      categories: [],
      
   
    },
  };
   this.barChartOptions2 = {
    series: [],
    colors: ["#4d8af0"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        bottom: 0
      }
    },
    chart: {
      type: 'bar',
      height: '320',
      parentHeightOffset: 0
    },
    yaxis : {
      labels : {
        style : {
          fontWeight : '600',
          fontSize : '13px'
        }
      }
    },
    xaxis: {
      type: 'category',
      categories: []
    }
  };
   this.barChartOptions3 = {
    series: [],
    colors: ["#4d8af0"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        bottom: 0
      }
    },
    chart: {
      type: 'bar',
      height: '320',
      parentHeightOffset: 0
    },
    yaxis : {
      labels : {
        style : {
          fontWeight : '600',
          fontSize : '13px'
        }
      }
    },
    xaxis: {
      type: 'category',
      categories: []
    }
  };

    /**
     * Radar chart options
     */
    
    this.radarChartOptions = {
      series: [{name:'data',data:[]}],
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            customIcons: [],
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString();
              },
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            },
          },
          autoSelected: 'zoom',
        },
      },

      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },

      colors: ['#009ACF', '#009ACF33'],
      markers: {
        size: 2,
        colors: ['#fff'],
        strokeColors: ['#FF4560'],
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' ' + 'm3';
          },
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        tickAmount: 7,
        show: false,
      },
    };




  }

  ngOnInit(): void { 
    this.currentDate = this.calendar.getToday();

    this.dashboardService.getBarValuesToday().subscribe(res=>{
      this.barChartData = res
      console.log(res)
      this.barChartData.forEach(element => {
        this.data.push(Math.ceil(element.consumption))
        this.data2.push(element.counts)
        this.data3.push(Math.ceil(element.consumptionValue))
        this.stationName.push(element.stationName)

      });
          let chartData = [{
              name : 'Sales' ,
             data : this.data
        }]
          let chartData2 = [{
              name : 'Transaction' ,
             data : this.data2
        }]
          let chartData3 = [{
              name : 'Total Value' ,
             data : this.data3
        }]

        console.log(this.stationName)
        let obj = {
          type: 'category',
         categories: this.stationName,


      
         tickAmount: undefined,
         tickPlacement: 'between',
         min: undefined,
         max: undefined,
         range: undefined,
         floating: false,
         decimalsInFloat: undefined,
         overwriteCategories: undefined,
         position: 'bottom',
         labels: {
             show: true,
             rotate: -45,
             rotateAlways: false,
             hideOverlappingLabels: true,
             showDuplicates: false,
             trim: false,
             minHeight: undefined,
             maxHeight: 120,
             style: {
                 colors: [],
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-label',
             },
             offsetX: 0,
             offsetY: 0,
             format: undefined,
             formatter: undefined,
             datetimeUTC: true,
             datetimeFormatter: {
                 year: 'yyyy',
                 month: "MMM 'yy",
                 day: 'dd MMM',
                 hour: 'HH:mm',
             },
         },
         axisBorder: {
             show: true,
             color: '#78909C',
             height: 1,
             width: '100%',
             offsetX: 0,
             offsetY: 0
         },
         axisTicks: {
             show: true,
             borderType: 'solid',
             color: '#78909C',
             height: 6,
             offsetX: 0,
             offsetY: 0
         },
        
         title: {
             text: undefined,
             offsetX: 0,
             offsetY: 0,
             style: {
                 color: undefined,
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-title',
             },
         },
         crosshairs: {
             show: true,
             width: 1,
             position: 'back',
             opacity: 0.9,        
             stroke: {
                 color: '#b6b6b6',
                 width: 0,
                 dashArray: 0,
             },
             fill: {
                 type: 'solid',
                 color: '#B1B9C4',
                 gradient: {
                     colorFrom: '#D8E3F0',
                     colorTo: '#BED1E6',
                     stops: [0, 100],
                     opacityFrom: 0.4,
                     opacityTo: 0.5,
                 },
             },
             dropShadow: {
                 enabled: false,
                 top: 0,
                 left: 0,
                 blur: 1,
                 opacity: 0.4,
             },
         },
         tooltip: {
             enabled: true,
             formatter: undefined,
             offsetY: 0,
         
     }
        }
        
        this.barChartOptions.xaxis = obj
        this.barChartOptions2.xaxis = obj
        this.barChartOptions3.xaxis = obj

      this.barChartOptions.series = chartData
      this.barChartOptions2.series = chartData2
      this.barChartOptions3.series = chartData3
       
    }) 
 
    this.dashboardService.getRadarValuesToday().subscribe(res=>{
      this.dataOfRadar=null;
      this.radarData = res
      console.log(this.radarData)
      
      this.radarData.forEach(element => {
        this.radarChartOptions.series[0].data.push(element.consumption);
        this.radarChartOptions.xaxis.categories.push(
          new Date(element.hourlydate).getHours()
        );
      });

     this.dataOfRadar = this.radarData;
      console.log(this.radarChartOptions)
    
      
    })

  }
  DrawRadarWithClick(event) {
   
    console.log(event)
    console.log(event.index)
     
     if(event.index == 0) {
       this.barChartData = []
      this.data = []
      this.data2 = []
      this.data3 = []
       this.stationName = []
       this.barChartOptions.series = []
      delete this.barChartOptions.xaxis
      this.dashboardService.getBarValuesToday().subscribe(res=>{
        this.barChartData = res
        console.log(res)
        this.barChartData.forEach(element => {
          this.data.push(Math.ceil(element.consumption))
        
          this.stationName.push(element.stationName)
 
        });
            let chartData = [{
                name : 'Sales' ,
               data : this.data
          }]
        
          console.log(this.stationName)
         
          let obj = {
            type: 'category',
           categories: this.stationName,

           
         tickAmount: undefined,
         tickPlacement: 'between',
         min: undefined,
         max: undefined,
         range: undefined,
         floating: false,
         decimalsInFloat: undefined,
         overwriteCategories: undefined,
         position: 'bottom',
         labels: {
             show: true,
             rotate: -45,
             rotateAlways: false,
             hideOverlappingLabels: true,
             showDuplicates: false,
             trim: false,
             minHeight: undefined,
             maxHeight: 120,
             style: {
                 colors: [],
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-label',
             },
             offsetX: 0,
             offsetY: 0,
             format: undefined,
             formatter: undefined,
             datetimeUTC: true,
             datetimeFormatter: {
                 year: 'yyyy',
                 month: "MMM 'yy",
                 day: 'dd MMM',
                 hour: 'HH:mm',
             },
         },
         axisBorder: {
             show: true,
             color: '#78909C',
             height: 1,
             width: '100%',
             offsetX: 0,
             offsetY: 0
         },
         axisTicks: {
             show: true,
             borderType: 'solid',
             color: '#78909C',
             height: 6,
             offsetX: 0,
             offsetY: 0
         },
        
         title: {
             text: undefined,
             offsetX: 0,
             offsetY: 0,
             style: {
                 color: undefined,
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-title',
             },
         },
         crosshairs: {
             show: true,
             width: 1,
             position: 'back',
             opacity: 0.9,        
             stroke: {
                 color: '#b6b6b6',
                 width: 0,
                 dashArray: 0,
             },
             fill: {
                 type: 'solid',
                 color: '#B1B9C4',
                 gradient: {
                     colorFrom: '#D8E3F0',
                     colorTo: '#BED1E6',
                     stops: [0, 100],
                     opacityFrom: 0.4,
                     opacityTo: 0.5,
                 },
             },
             dropShadow: {
                 enabled: false,
                 top: 0,
                 left: 0,
                 blur: 1,
                 opacity: 0.4,
             },
         },
         tooltip: {
             enabled: true,
             formatter: undefined,
             offsetY: 0,
         
     }
          }
         
          this.barChartOptions.xaxis = obj
       
 
        this.barChartOptions.series = chartData
      
        
      }) 
     }else if (event.index == 1) {
      this.barChartData = []
      this.data = []
      this.data2 = []
      this.data3 = []
      this.stationName = []
      this.barChartOptions2.series = []
     delete this.barChartOptions2.xaxis

        this.dashboardService.getBarValuesToday().subscribe(res=>{
          this.barChartData = res
          console.log(res)
          this.barChartData.forEach(element => {
            
            this.data2.push(element.counts)
            this.stationName.push(element.stationName)
   
          });
           
              let chartData2 = [{
                  name : 'Transaction' ,
                 data : this.data2
            }]
            
            console.log(chartData2)
            console.log(this.stationName)
            let obj = {
              type: 'category',
             categories: this.stationName,

             
         tickAmount: undefined,
         tickPlacement: 'between',
         min: undefined,
         max: undefined,
         range: undefined,
         floating: false,
         decimalsInFloat: undefined,
         overwriteCategories: undefined,
         position: 'bottom',
         labels: {
             show: true,
             rotate: -45,
             rotateAlways: false,
             hideOverlappingLabels: true,
             showDuplicates: false,
             trim: false,
             minHeight: undefined,
             maxHeight: 120,
             style: {
                 colors: [],
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-label',
             },
             offsetX: 0,
             offsetY: 0,
             format: undefined,
             formatter: undefined,
             datetimeUTC: true,
             datetimeFormatter: {
                 year: 'yyyy',
                 month: "MMM 'yy",
                 day: 'dd MMM',
                 hour: 'HH:mm',
             },
         },
         axisBorder: {
             show: true,
             color: '#78909C',
             height: 1,
             width: '100%',
             offsetX: 0,
             offsetY: 0
         },
         axisTicks: {
             show: true,
             borderType: 'solid',
             color: '#78909C',
             height: 6,
             offsetX: 0,
             offsetY: 0
         },
        
         title: {
             text: undefined,
             offsetX: 0,
             offsetY: 0,
             style: {
                 color: undefined,
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-title',
             },
         },
         crosshairs: {
             show: true,
             width: 1,
             position: 'back',
             opacity: 0.9,        
             stroke: {
                 color: '#b6b6b6',
                 width: 0,
                 dashArray: 0,
             },
             fill: {
                 type: 'solid',
                 color: '#B1B9C4',
                 gradient: {
                     colorFrom: '#D8E3F0',
                     colorTo: '#BED1E6',
                     stops: [0, 100],
                     opacityFrom: 0.4,
                     opacityTo: 0.5,
                 },
             },
             dropShadow: {
                 enabled: false,
                 top: 0,
                 left: 0,
                 blur: 1,
                 opacity: 0.4,
             },
         },
         tooltip: {
             enabled: true,
             formatter: undefined,
             offsetY: 0,
         
     }
            }
           
            this.barChartOptions2.xaxis = obj
   
   
          this.barChartOptions2.series = chartData2
          
        }) 
       
     }else if(event.index == 2) {
      this.barChartData = []
      this.data = []
      this.data2 = []
      this.data3 = []
      this.stationName = []
      this.barChartOptions3.series 
     delete this.barChartOptions3.xaxis


      this.dashboardService.getBarValuesToday().subscribe(res=>{
        this.barChartData = res
        console.log(res)
        this.barChartData.forEach(element => {
       
          this.data3.push(Math.ceil(element.consumptionValue))
       
          this.stationName.push(element.stationName)
 
        });
        
            let chartData3 = [{
                name : 'Value' ,
               data : this.data3
          }]
           
          console.log(chartData3)
          
          console.log(this.stationName)
          let obj = {
            type: 'category',
           categories: this.stationName,

           
         tickAmount: undefined,
         tickPlacement: 'between',
         min: undefined,
         max: undefined,
         range: undefined,
         floating: false,
         decimalsInFloat: undefined,
         overwriteCategories: undefined,
         position: 'bottom',
         labels: {
             show: true,
             rotate: -45,
             rotateAlways: false,
             hideOverlappingLabels: true,
             showDuplicates: false,
             trim: false,
             minHeight: undefined,
             maxHeight: 120,
             style: {
                 colors: [],
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-label',
             },
             offsetX: 0,
             offsetY: 0,
             format: undefined,
             formatter: undefined,
             datetimeUTC: true,
             datetimeFormatter: {
                 year: 'yyyy',
                 month: "MMM 'yy",
                 day: 'dd MMM',
                 hour: 'HH:mm',
             },
         },
         axisBorder: {
             show: true,
             color: '#78909C',
             height: 1,
             width: '100%',
             offsetX: 0,
             offsetY: 0
         },
         axisTicks: {
             show: true,
             borderType: 'solid',
             color: '#78909C',
             height: 6,
             offsetX: 0,
             offsetY: 0
         },
        
         title: {
             text: undefined,
             offsetX: 0,
             offsetY: 0,
             style: {
                 color: undefined,
                 fontSize: '13px',
                 fontFamily: 'Helvetica, Arial, sans-serif',
                 fontWeight: 600,
                 cssClass: 'apexcharts-xaxis-title',
             },
         },
         crosshairs: {
             show: true,
             width: 1,
             position: 'back',
             opacity: 0.9,        
             stroke: {
                 color: '#b6b6b6',
                 width: 0,
                 dashArray: 0,
             },
             fill: {
                 type: 'solid',
                 color: '#B1B9C4',
                 gradient: {
                     colorFrom: '#D8E3F0',
                     colorTo: '#BED1E6',
                     stops: [0, 100],
                     opacityFrom: 0.4,
                     opacityTo: 0.5,
                 },
             },
             dropShadow: {
                 enabled: false,
                 top: 0,
                 left: 0,
                 blur: 1,
                 opacity: 0.4,
             },
         },
         tooltip: {
             enabled: true,
             formatter: undefined,
             offsetY: 0,
         
     }
          }
         
         
          this.barChartOptions3.xaxis = obj
 
        this.barChartOptions3.series = chartData3
        
      }) 
     }
  }
}

 