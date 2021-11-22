import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() btnClick = new EventEmitter();

  @Input() count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    console.log(this.count);
  }

  decreaseCount(): void {
    this.count--;
    console.log(this.count);
  }

}
