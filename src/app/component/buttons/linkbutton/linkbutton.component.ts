import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linkbutton',
  templateUrl: './linkbutton.component.html',
  styleUrls: ['./linkbutton.component.css']
})
export class LinkbuttonComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
