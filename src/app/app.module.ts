import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsConfiguration, NgChartsModule  } from 'ng2-charts';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTable, MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { TabNavComponent } from './tab-nav/tab-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    ChartComponent,
    TabNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatTableModule,MatFormFieldModule ,MatInputModule,
    NgChartsModule,
    HttpClientModule,
    AgChartsAngularModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
