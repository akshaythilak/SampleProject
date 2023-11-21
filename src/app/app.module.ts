import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTable, MatTableModule } from '@angular/material/table';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LeadStatusComponent } from './lead-status/lead-status.component';
import { HttpInterceptor } from './interceptor/http.interceptor';
import { TransformDataPipe } from './pipe/transform-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    BarChartComponent,
    TabNavComponent,
    LeadStatusComponent,
    TransformDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi:true}, TransformDataPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
