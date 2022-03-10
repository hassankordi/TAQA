import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as ApexCharts from 'apexcharts';

import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexGrid, ApexChart, ApexXAxis, ApexYAxis, ApexMarkers, ApexStroke, ApexLegend, ApexResponsive, ApexTooltip, ApexFill, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle } from 'ng-apexcharts';
import { DataTable } from "simple-datatables";



import { DashboardService } from '../dashoard.service';

export type apexChartOptions = {





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
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.scss']
})
export class CompressorComponent implements OnInit  , AfterViewInit{
  displayedColumns: string[] = [
    "Station Name",
    "Compressor",
    "Warning Type",
    "Alarm Type",
    "Time",
   
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  getTempratureGraphData : any = []
  discharge_Temprature : any = []
  oil_Pressure : any = []
  stage1_Temprature : any = []
  stage2_Temprature : any = []
  stage3_Temprature : any = []
  stage4_Temprature : any = []
  stage5_Temprature : any = []
  dataTime : any = []
  line5Data  = null
  getPressureData : any = []
  inlet_Pressure  :any = []
  oil_Pressure2  :any = []
  stage1_Pressure  :any = []
  stage2_Pressure  :any = []
  stage3_Pressure  :any = []
  stage4_Pressure  :any = []
  stage5_Pressure  :any = []
  dataTime2  :any = []
  line4Data = null
  getLastReadObj? : any = {}
  getAlramsData  :any = []
  getAlarmDataArr  : any = []
  dataSource
  tableGridData  :any
  ss = true
  public apexChart4Options: Partial<apexChartOptions>;
  public apexChart5Options: Partial<apexChartOptions>;





  performanceChart1:any = 0
  public canvasWidth1 = 150
  public needleValue1 = this.performanceChart1
  public centralLabel1 = ''
  public name1 = 'Performance'
  public bottomLabel1 = 'ss'
  public nameFont1 = '20px'


  performanceChart2:any = 0
  public canvasWidth2 = 150
  public needleValue2 = this.performanceChart2
  public centralLabel2 = ''
  public name2 = 'Performance'
  public bottomLabel2 = `${this.performanceChart2}`

  performanceChart3:any = 0
  public canvasWidth3 = 150
  public needleValue3 = this.performanceChart3
  public centralLabel3 = ''
  public name3 = 'Performance'
  public bottomLabel3 = `${this.performanceChart3}`

  performanceChart4:any = 0
  public canvasWidth4 = 150
  public needleValue4 = this.performanceChart4
  public centralLabel4 = ''
  public name4 = 'Performance'
  public bottomLabel4 = `${this.performanceChart4}`

  performanceChart5:any = 0
  public canvasWidth5 = 150
  public needleValue5 = this.performanceChart5
  public centralLabel5 = ''
  public name5 = 'Performance'
  public bottomLabel5 = `${this.performanceChart5}`

  performanceChart6:any = 0
  public canvasWidth6 = 150
  public needleValue6 = this.performanceChart1
  public centralLabel6 = ''
  public name6 = 'Performance'
  public bottomLabel6 = `${this.performanceChart6}`

  performanceChart7:any = 0
  public canvasWidth7 = 150
  public needleValue7 = this.performanceChart7
  public centralLabel7 = ''
  public name7 = 'Performance'
  public bottomLabel7= `${this.performanceChart7}`

  performanceChart8:any = 0
  public canvasWidth8 = 150
  public needleValue8 = this.performanceChart8
  public centralLabel8 = ''
  public name8 = 'Performance'
  public bottomLabel8 = `${this.performanceChart8}`

  performanceChart9:any = 0
  public canvasWidth9 = 150
  public needleValue9 = this.performanceChart1
  public centralLabel9 = ''
  public name9 = 'Performance'
  public bottomLabel9 = `${this.performanceChart9}`

  performanceChart10:any = 0
  public canvasWidth10 = 150
  public needleValue10 = this.performanceChart1
  public centralLabel10 = ''
  public name10 = 'Performance'
  public bottomLabel10 = `${this.performanceChart10}`

  performanceChart11:any = 0
  public canvasWidth11 = 150
  public needleValue11 = this.performanceChart1
  public centralLabel11 = ''
  public name11 = 'Performance'
  public bottomLabel11 = `${this.performanceChart11}`

  performanceChart12:any = 0
  public canvasWidth12 = 150
  public needleValue12 = this.performanceChart12
  public centralLabel12 = ''
  public name12 = 'Performance'
  public bottomLabel12 = `${this.performanceChart12}`

  performanceChart13:any = 0
  public canvasWidth13= 150
  public needleValue13 = this.performanceChart13
  public centralLabel13 = ''
  public name13 = 'Performance'
  public bottomLabel13 = `${this.performanceChart13}`

  performanceChart14:any = 0
  public canvasWidth14 = 150
  public needleValue14 = this.performanceChart14
  public centralLabel14 = ''
  public name14 = 'Performance'
  public bottomLabel14 = `${this.performanceChart14}`



  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 5000,
    arcColors: ['#00c800', "#ffea00","#ffa300" ,"#ff5500" , "#cc000a" ],
    arcDelimiters: [ 20 ,  40  ,  60 , 80  , 99.9 ],
    rangeLabel: ['0', '1000'],
    needleStartValue: 0,
    
  }



  constructor(private dashboardSevice : DashboardService) {

     // ApexChart4 options



 // ApexChart4 options
 this.apexChart4Options = {
  series: [{
   
    name : 'Discharge Temprature',

    data: [] 
  },{
    name: 'Oil Temprature',
    data: [] 
  },{
    name: 'Stage1 Temprature1',

    data: [] 
  },{
    name: 'Stage1 Temprature2',

    data: [] 
  },{
    name: 'Stage1 Temprature3',

    data: [] 
  },{
    name: 'Stage1 Temprature4',

    data: [] 
  },{
    name: 'Stage1 Temprature5',

    data: [] 
  }],
  chart: {
    height: 350,
    type: 'line',
  },
  
  
  dataLabels: {
    enabled: false,
    
  },
  
  stroke: {
    curve: 'smooth',
  },
  legend : {
    fontSize  : '13px',
    fontWeight  :'bold'

  },
  xaxis: {
    labels : {
      style : {
        fontWeight : '600' , 
        fontSize : '13px'
      },
    },
    categories: [],
  },
  yaxis: {
    labels: {
      style : {
        fontWeight : '600' , 
        fontSize : '13px'
      },
      formatter: function (value) {
        return value + ' ' + 'm3';
      },    
    },
  },

  

  
  
  colors: ['#005FFB' , '#00e396' , '#feb019' , '#ff4560' , '#775dd0' , '#008ffb' , '#db16a7'],
  
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },

};
       









  // ApexChart5 options
  this.apexChart5Options = {

    series: [{
      name : 'Inlet Pressure',
      data: [] 
    },{
      name: 'Oil Pressure',
      data: [] 
    },{
      name: 'Stage1 Pressure',
    
      data: [] 
    },{
      name: 'Stage2 Pressure',
    
      data: [] 
    },{
      name: 'Stage3 Pressure',
    
      data: [] 
    },{
      name: 'Stage4 Pressure',
    
      data: [] 
    },{
      name: 'Stage5 Temprature5',
    
      data: [] 
    }],



    chart: {
      height: 350,
      type: 'line',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
    labels : {
      style : {
        fontWeight : '600' , 
        fontSize : '13px'
      },
    },
      categories: [],
    },
    legend : {
      fontSize  : '13px',
      fontWeight  :'bold'

    },
    yaxis: {
      labels: {
        style : {
          fontWeight : '600' , 
          fontSize : '13px'
        },
        formatter: function (value) {
          return value + ' ' + 'm3';
        },    
      },
    },
  
    colors: ['#005FFB' , '#00e396' , '#feb019' , '#ff4560' , '#775dd0' , '#008ffb' , '#db16a7'],
    
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };           
        
   }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(
      this.tableGridData
    );
    this.dashboardSevice.getTempratureGraph().subscribe(res=>{
      this.getTempratureGraphData = res
      this.line4Data = null
      console.log(res)
      this.getTempratureGraphData.forEach(element => {
       
     
        this.discharge_Temprature.push(element.discharge_Temprature)
        this.oil_Pressure.push(element.oil_Temprature)
        this.stage1_Temprature.push(element.stage1_Temprature)
        this.stage2_Temprature.push(element.stage2_Temprature)
        this.stage3_Temprature.push(element.stage3_Temprature)
        this.stage4_Temprature.push(element.stage4_Temprature)
        this.stage5_Temprature.push(element.stage5_Temprature)
        this.dataTime.push(new Date (element.hourlydate).getHours())


      
      });

     this.line4Data = this.apexChart4Options.series[0].data = this.discharge_Temprature
     this.line4Data = this.apexChart4Options.series[1].data = this.oil_Pressure
     this.line4Data = this.apexChart4Options.series[2].data = this.stage1_Temprature
     this.line4Data = this.apexChart4Options.series[3].data = this.stage2_Temprature
     this.line4Data = this.apexChart4Options.series[4].data = this.stage3_Temprature
     this.line4Data = this.apexChart4Options.series[5].data = this.stage4_Temprature
     this.line4Data = this.apexChart4Options.series[6].data = this.stage5_Temprature
     this.apexChart4Options.xaxis.categories = this.dataTime
     })

     this.dashboardSevice.GetPressureGraph().subscribe(res=>{
       this.line5Data = null
       this.getPressureData = res
       this.getPressureData.forEach(element => {
        console.log(element)

        
         this.inlet_Pressure.push(element.inlet_Pressure)
         this.oil_Pressure2.push(element.oil_Pressure)
         this.stage1_Pressure.push(element.stage1_Pressure)
         this.stage2_Pressure.push(element.stage2_Pressure)
         this.stage3_Pressure.push(element.stage3_Pressure)
         this.stage4_Pressure.push(element.stage4_Pressure)
         this.stage5_Pressure.push(element.stage5_Pressure)
         this.dataTime2.push(new Date(element.hourlydate).getHours())
       });

       this.line5Data = this.apexChart5Options.series[0].data = this.inlet_Pressure
       this.line5Data = this.apexChart5Options.series[1].data = this.oil_Pressure2
       this.line5Data = this.apexChart5Options.series[2].data = this.stage1_Pressure
       this.line5Data = this.apexChart5Options.series[3].data = this.stage2_Pressure
       this.line5Data = this.apexChart5Options.series[4].data = this.stage3_Pressure
       this.line5Data = this.apexChart5Options.series[5].data = this.stage4_Pressure
       this.line5Data = this.apexChart5Options.series[6].data = this.stage5_Pressure
       this.apexChart5Options.xaxis.categories = this.dataTime2
     })
    
    this.dashboardSevice.GetLastRead().subscribe(res=>{
     this.getLastReadObj = res
      console.log(res)
     this.performanceChart1 = Number(this.getLastReadObj.discharge_Temprature / 10).toFixed() 
     this.canvasWidth1 = 150
     
     this.needleValue1 = this.performanceChart1
     this.centralLabel1 = ''
     this.name1 = 'Discharge Temprature'
     this.bottomLabel1 =  Number(this.getLastReadObj.discharge_Temprature).toFixed()


     this.performanceChart2 = Number(this.getLastReadObj.oil_Temprature / 10).toFixed() 
     this.canvasWidth2 = 150
     this.needleValue2 = this.performanceChart2
     this.centralLabel2 = ''
     this.name2 = 'Oil Temprature'
     this.bottomLabel2 = Number(this.getLastReadObj.oil_Temprature).toFixed() 
   
     this.performanceChart3 = Number(this.getLastReadObj.stage1_Temprature / 10).toFixed() 
     this.canvasWidth3 = 150
     this.needleValue3 = this.performanceChart3
     this.centralLabel3 = ''
     this.name3 = 'Stage1 Temprature'
     this.bottomLabel3 = Number(this.getLastReadObj.stage1_Temprature).toFixed()
   
     this.performanceChart4 = Number(this.getLastReadObj.stage2_Temprature / 10).toFixed() 
     this.canvasWidth4 = 150
     this.needleValue4 = this.performanceChart4
     this.centralLabel4 = ''
     this.name4 = 'Stage2 Temprature'
     this.bottomLabel4 = Number(this.getLastReadObj.stage2_Temprature).toFixed()
   
     this.performanceChart5 = Number(this.getLastReadObj.stage3_Temprature / 10).toFixed() 
     this.canvasWidth5 = 150
     this.needleValue5 = this.performanceChart5
     this.centralLabel5 = ''
     this.name5 = 'Stage3 Temprature'
     this.bottomLabel5 = Number(this.getLastReadObj.stage3_Temprature).toFixed()
   
     this.performanceChart6 = Number(this.getLastReadObj.stage4_Temprature / 10).toFixed() 
     this.canvasWidth6 = 150
     this.needleValue6 = this.performanceChart1
     this.centralLabel6 = ''
     this.name6 = 'Stage4 Temprature'
     this.bottomLabel6 = Number(this.getLastReadObj.stage4_Temprature).toFixed() 
   
     this.performanceChart7 = Number(this.getLastReadObj.stage5_Temprature / 10).toFixed() 
     this.canvasWidth7 = 150
     this.needleValue7 = this.performanceChart7
     this.centralLabel7 = ''
     this.name7 = 'Stage5 Temprature'
     this.bottomLabel7= Number(this.getLastReadObj.stage5_Temprature).toFixed() 






    this.performanceChart8 = Number(this.getLastReadObj.inlet_Pressure / 10).toFixed()
     this.canvasWidth8 = 150
     this.needleValue8 = this.performanceChart8
     this.centralLabel8 = ''
     this.name8 = 'Inlet Pressure'
     this.bottomLabel8 = Number(this.getLastReadObj.inlet_Pressure).toFixed()
   
    this.performanceChart9 = Number(this.getLastReadObj.oil_Pressure / 10).toFixed()
     this.canvasWidth9 = 150
     this.needleValue9 = this.performanceChart1
     this.centralLabel9 = ''
     this.name9 = 'Oil Pressure'
     this.bottomLabel9 = Number(this.getLastReadObj.oil_Pressure).toFixed()
   
     this.performanceChart10 = Number(this.getLastReadObj.stage1_Pressure / 10).toFixed()
     this.canvasWidth10 = 150
     this.needleValue10 = this.performanceChart1
     this.centralLabel10 = ''
     this.name10 = 'Stage1 Pressure'
     this.bottomLabel10 = Number(this.getLastReadObj.stage1_Pressure).toFixed()
   
     this.performanceChart11 = Number(this.getLastReadObj.stage2_Pressure / 10).toFixed()
     this.canvasWidth11 = 150
     this.needleValue11 = this.performanceChart1
     this.centralLabel11 = ''
     this.name11 = 'Stage2 Pressure'
     this.bottomLabel11 = Number(this.getLastReadObj.stage2_Pressure).toFixed()
   
     this.performanceChart12 = Number(this.getLastReadObj.stage3_Pressure / 10).toFixed()
     this.canvasWidth12 = 150
     this.needleValue12 = this.performanceChart12
     this.centralLabel12 = ''
     this.name12 = 'Stage3 Pressure'
     this.bottomLabel12 = Number(this.getLastReadObj.stage3_Pressure).toFixed()
   
     this.performanceChart13 = Number(this.getLastReadObj.stage4_Pressure / 10).toFixed()
     this.canvasWidth13= 150
     this.needleValue13 = this.performanceChart13
     this.centralLabel13 = ''
     this.name13 = 'Stage4 Pressure'
     this.bottomLabel13 = Number(this.getLastReadObj.stage4_Pressure).toFixed()
   
     this.performanceChart14 = Number(this.getLastReadObj.stage5_Pressure / 10).toFixed()
     this.canvasWidth14 = 150
     this.needleValue14 = this.performanceChart14
     this.centralLabel14 = ''
     this.name14 = 'Stage5 Pressure'
     this.bottomLabel14 = Number(this.getLastReadObj.stage5_Pressure).toFixed()
   

    
    })
    this.dashboardSevice.GetAlarms().subscribe(res=>{
      console.log(res)
      this.tableGridData = res[0]
    
    })
   
  }

  DrawRadarWithClick(e) {
    this.getPressureData = []
    this.inlet_Pressure = []
    this.oil_Pressure2 = []
    this.stage1_Pressure = []
    this.stage2_Pressure = []
    this.stage3_Pressure = []
    this.stage4_Pressure = []
    this.stage5_Pressure = []
    this.dataTime2 = []
    this.line5Data = []
    this.line5Data = null
    this.dashboardSevice.GetPressureGraph().subscribe(res=>{
      this.getPressureData = res
      this.getPressureData.forEach(element => {
       console.log(element)

       
        this.inlet_Pressure.push(element.inlet_Pressure)
        this.oil_Pressure2.push(element.oil_Pressure)
        this.stage1_Pressure.push(element.stage1_Pressure)
        this.stage2_Pressure.push(element.stage2_Pressure)
        this.stage3_Pressure.push(element.stage3_Pressure)
        this.stage4_Pressure.push(element.stage4_Pressure)
        this.stage5_Pressure.push(element.stage5_Pressure)
        this.dataTime2.push(new Date(element.hourlydate).getHours())
   
      
      });
      this.line5Data = this.apexChart5Options.series[0].data = this.inlet_Pressure
      this.line5Data = this.apexChart5Options.series[1].data = this.oil_Pressure2
      this.line5Data = this.apexChart5Options.series[2].data = this.stage1_Pressure
      this.line5Data = this.apexChart5Options.series[3].data = this.stage2_Pressure
      this.line5Data = this.apexChart5Options.series[4].data = this.stage3_Pressure
      this.line5Data = this.apexChart5Options.series[5].data = this.stage4_Pressure
      this.line5Data = this.apexChart5Options.series[6].data = this.stage5_Pressure
      this.apexChart5Options.xaxis.categories = this.dataTime2
 
    })
  }
 
}



