import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent implements OnInit {
  faPlus = faPlus;
  faCloudUploadAlt = faCloudUploadAlt;
  faPlay = faPlay;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faEye = faEye;
  
  constructor() { }

  ngOnInit(): void {
  }

}
