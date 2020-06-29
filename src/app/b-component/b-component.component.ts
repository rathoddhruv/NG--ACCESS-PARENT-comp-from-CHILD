import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { HomeComponent } from 'home.component';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {
  @Input() somethingTestB;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  getParentComponent(): HomeComponent{
        return this.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component
    }

  testClick() {        
    console.log(this.getParentComponent());
    this.getParentComponent().testHome = 'Its Sara..!';
  }
}