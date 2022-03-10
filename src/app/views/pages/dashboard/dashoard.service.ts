import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }
  getStationsValuesToday() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetAllStationsValue/1`)
  }
 
  getBarValuesToday() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetAllStations/1`)
  }
  getRadarValuesToday() {
    return this.http.get(environment.sourceUrl + `Vechileflows/ConsumptionReads/1`)
  }
  getTempratureGraph() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetTempratureGraph/1/1`)
  }
  GetPressureGraph() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetPressureGraph/1/1`)
  }
  GetLastRead() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetLastRead/1/1`)
  }
  GetAlarms() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetAlarms/1`)
  }
  GetStationDispensers() {
    return this.http.get(environment.sourceUrl + `Vechileflows/GetStationDispensers/1/1`)
  }
 
 
}
