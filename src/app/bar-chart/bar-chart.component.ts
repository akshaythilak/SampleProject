import { Component, ViewChild, Input, OnInit } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { LeadsListService } from "../services/leads-list.service";

// type ApexXAxis = {
//   type?: "category" | "datetime" | "numeric";
//   categories?: any;
//   axisTicks: {
//     show: boolean;
//   };
//   labels?: {
//     style?: {
//       colors?: string | string[];
//       fontSize?: string;
//     };
//   };
// };

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  dataLabels?: ApexDataLabels;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis;
  xaxis?: ApexXAxis;
  grid?: ApexGrid;
  colors?: string[];
  legend?: ApexLegend;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() graphState:  Array<{
    stage_name: string,
    leads: number
  }> = []
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {

  }
  ngOnInit(): void {
     console.log('graphState',this.graphState)
    const leads = this.graphState.map(data => data.leads)
    const categories = this.graphState.map(data => data.stage_name)

    this.chartOptions = {
      series: [
        {
          name: "Lead list",
          data: leads
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: [
        "#D3DFFB",
        "#A7BFF4",
        "#7C9EF2",
        "#507EEC",
        "#3454CF"
      ],
      plotOptions: {
        bar: {
          columnWidth: "25%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: categories,
        axisTicks: {
          show: false
        }
      },
      tooltip: {
        enabled: false,
      },
      yaxis:{
        tickAmount : 0
      }
    };
  }

}
