import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @ViewChild('mycanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.draw(this.canvas.nativeElement);
  }

  draw(ctx: HTMLCanvasElement) {
    let config = {
      type: 'bar',
      data: data,
      options: options
    }


    var myChart = new Chart(this.ctx, config);
  }
}
