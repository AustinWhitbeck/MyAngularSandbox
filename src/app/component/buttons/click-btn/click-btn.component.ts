import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-btn',
  templateUrl: './click-btn.component.html',
  styleUrls: ['./click-btn.component.css']
})
export class ClickBtnComponent implements OnInit {

  @Output() btnClick = new EventEmitter();

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
