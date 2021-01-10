import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // @Input element:{name:string};
  constructor() { }

  ngOnInit(): void {
  }
  clickSlider(category){
    console.log("here"+category);
  }
}
