import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { HomeComponent } from 'home.component';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
  @Input() somethingTestA;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    
  }
  getParentComponent(): HomeComponent{
        return this.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component
    }

  testClick() {
    this.getParentComponent().testHome = 'Its Jim..!';
  }

}