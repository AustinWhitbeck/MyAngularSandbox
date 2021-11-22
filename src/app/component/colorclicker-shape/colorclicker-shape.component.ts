import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colorclicker-shape',
  templateUrl: './colorclicker-shape.component.html',
  styleUrls: ['./colorclicker-shape.component.css']
})
export class ColorclickerShapeComponent implements OnInit {

  @Input() color: string = "";

  colorArray: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  currentNumber: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  nextColor(): void {
    // count is used to increase the number to check logic, then change the currentNumber
    const count = this.currentNumber + 1;
    if(count < this.colorArray.length){
    this.currentNumber++;
    } else {
      this.currentNumber = 0;
    }
    console.log(this.currentNumber);
    this.color = this.colorArray[this.currentNumber];
  
  }

}
