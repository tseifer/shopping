import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(public dataService: DataService) { }

  @ViewChild('mycanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private chart: Chart;

  dataArr = [this.dataService.getInventoryValue(),
             this.dataService.getCartValue()];

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');


    this.draw();
    //this.dataService.graphRefresh$.subscribe(() => this.draw());

    this.dataService.graphRefresh$.subscribe(() => {
      this.dataArr[0] = this.dataService.getInventoryValue();
      this.dataArr[1] = this.dataService.getCartValue();
      this.chart.update();
      //this.draw();
    })
  }

  draw() {
    let config = {
      type: 'bar',

      data: {
        labels: ['Shop', 'Cart'],
        datasets: [{
          label: 'values',
          barThickness: 20,
          maxBarThickness: 20,
          minBarLength: 2,
          data: this.dataArr,
          // data: [this.dataService.getInventoryValue(),
          //        this.dataService.getCartValue()],
          backgroundColor: ['#ff6384', '#36a2eb',]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 300
            }
          }]
        }
      }
    };


   this.chart = new Chart(this.ctx, config);
  }
}
