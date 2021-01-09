import { Component, OnInit } from '@angular/core';
import contentFile from '../_files/content.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  jsonContent = contentFile;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
}
