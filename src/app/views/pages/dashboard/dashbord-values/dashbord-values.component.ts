import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { DashboardService } from "../dashoard.service";

@Component({
  selector: "app-dashbord-values",
  templateUrl: "./dashbord-values.component.html",
  styleUrls: ["./dashbord-values.component.scss"],
})
export class DashbordValuesComponent implements OnInit {
  totalDashboadObj : any ;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private dashboardService : DashboardService) {
  

   
  }

  ngOnInit(): void {
  
      this.dashboardService.getStationsValuesToday().subscribe(res=>{
        this.totalDashboadObj = res
        console.log(res)
      })
  
  
  
    
  
  }
  fromDate(event) {

  }
  fromDate2(event) {

  }
}
 
