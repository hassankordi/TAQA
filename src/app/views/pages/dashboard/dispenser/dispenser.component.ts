import { Component, OnInit } from '@angular/core';
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
import { DashboardService } from '../dashoard.service';

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
  selector: 'app-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.scss']
})
export class DispenserComponent implements OnInit {
  public radarChartOptions: Partial<ChartOptions>;
  GetStationDispensers : any = []
  GetStationDispensersData : any = []

  constructor(private dashboardService : DashboardService) { 
        /**
     * Radar chart options
     */
         this.radarChartOptions = {
          series: [
            {
              name: 'Series 1',
              data: [80, 50, 30, 40, 100, 20],
            }, {
              name: 'Series 2',
              data: [20, 30, 40, 80, 20, 80],
            }, {
              name: 'Series 3',
              data: [44, 76, 78, 13, 43, 10],
            }
          ],
          colors: ["#f77eb9", "#7ee5e5","#4d8af0"],
          chart: {
            height: 300,
            type: 'radar',
            parentHeightOffset: 0,
          },
          stroke: {
            width: 0
          },
          fill: {
            opacity: 0.4
          },
          markers: {
            size: 0
          },
          labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
          legend: {
            position: 'top',
            horizontalAlign: 'left'
          },
          grid: {
            borderColor: "rgba(77, 138, 240, .1)",
            padding: {
              bottom: -15
            }
          }
        };
    
  }

  ngOnInit(): void {
    this.dashboardService.GetStationDispensers().subscribe(res=>{
      this.GetStationDispensers = res
      this.GetStationDispensers.forEach(element => {
        this.GetStationDispensersData = element
        console.log(element)
      });
      
    })
  }

}

left: "Left"
leftconsumption: 2128.5215
leftconsumptionValue: 7449.8253
machineId: "MOST01_1"


right: "Right"
rightconsumption: 1657.2043
rightconsumptionValue: 5800.2151
stationName: "Mostord 1"