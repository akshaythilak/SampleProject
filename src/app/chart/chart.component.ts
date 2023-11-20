import { Component, ViewChild  } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  public options: AgChartOptions;

  constructor() {
    this.options = {
      autoSize: true,
      data: this.getData(),
      theme: {
        palette: {
          fills: [
            '#f1c40f',
          ],
          strokes: [
            '#f39c12',

          ],
        },
        overrides: {
          column: {
            series: {
              strokeWidth: 0,
             
            },
          },
        },
      },
      title: {
        text: 'Ethnic Diversity of School Pupils',
        fontSize: 18,
        spacing: 25,
      },
      footnote: {
        text: 'Source: Department for Education',
      },
      series: [
        {
          type: 'column',
          xKey: 'type',
          yKey: 'white',
          yName: 'White',
          normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'type',
          yKey: 'mixed',
          yName: 'Mixed',
          normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'type',
          yKey: 'asian',
          yName: 'Asian',
          normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'type',
          yKey: 'black',
          yName: 'Black',
          normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'type',
          yKey: 'chinese',
          yName: 'Chinese',
          normalizedTo: 100,
          stacked: true,
        },
        {
          type: 'column',
          xKey: 'type',
          yKey: 'other',
          yName: 'Other',
          normalizedTo: 100,
          stacked: true,
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
          label: {
            format: '#{.0f}%',
          },
        },
      ],
    };
  }

  ngOnInit() {}

  getData(){
    return [
      {
        type: 'Nursery',
        white: 24801,
        mixed: 4052,
        asian: 7317,
        black: 3742,
        chinese: 284,
        other: 1338,
      },
      {
        type: 'Primary',
        white: 3475379,
        mixed: 298866,
        asian: 527391,
        black: 258774,
        chinese: 22844,
        other: 95064,
      },
      {
        type: 'Secondary',
        white: 2436365,
        mixed: 182721,
        asian: 377168,
        black: 198080,
        chinese: 13317,
        other: 62662,
      },
      {
        type: 'Special',
        white: 91696,
        mixed: 7426,
        asian: 12328,
        black: 8546,
        chinese: 404,
        other: 2109,
      },
      {
        type: 'Referral units',
        white: 12347,
        mixed: 1448,
        asian: 605,
        black: 1104,
        chinese: 4,
        other: 229,
      },
    ];
  }
}
