import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";
// Ng2-charts
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
// material

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { StationComponent } from './station/station.component';
import { DispenserComponent } from './dispenser/dispenser.component';
import { CompressorComponent } from './compressor/compressor.component';
import { DashbordValuesComponent } from './dashbord-values/dashbord-values.component';
import {MatIconModule} from '@angular/material/icon';

// chart gauge 
import { GaugeChartModule } from 'angular-gauge-chart'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

  },
  {
    path: 'Station',
    component: StationComponent,

  }, 
   {
    path: 'Compressor',
    component: CompressorComponent,

  },
  {
    path: 'Dispenser',
    component: DispenserComponent,

  },


]

@NgModule({
  declarations: [DashboardComponent, StationComponent, DispenserComponent, CompressorComponent, DashbordValuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    ChartsModule,MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSortModule,
    MatDialogModule ,
    GaugeChartModule,
    MatIconModule
    ]
})
export class DashboardModule { }
