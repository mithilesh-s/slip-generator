import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.scss']
})
export class TestDirectiveComponent implements OnInit {

  constructor() { }
  userName:string;
  isClicked:boolean=false;
  ngOnInit(): void {
  }

  showDiv(){
    this.isClicked=true;
  }

}
