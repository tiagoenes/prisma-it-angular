import { Component, OnInit } from '@angular/core';
import contentFile from './_files/content.json';
import { faClock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  faClock = faClock;

  checked=true;
  categories = contentFile;
  title = 'prisma-it-angular';
  arrayChecked=[]
  totalDuration=[];

  ngOnInit(): void {
    this.categories.forEach(element => {
      this.arrayChecked[element.name]=true;
    });
  }
  calculateTotDurarion(index){
    let count = 0;
    
      this.categories[index].slides.forEach(element => {
        
        count+=Number(element.duration);
      });
    
    this.totalDuration[index]=count;
    return this.calculateTime(this.totalDuration[index]);
  }
  totalDurationChannel(){
    let sum = 0;
    this.categories.forEach(category => {
      category.slides.forEach(element => {
        sum+=element.duration;
      });
    });
    return this.calculateTime(sum);
  }
  calculateTime(d){
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
    return hDisplay + mDisplay + sDisplay; 
  }
  isChecked(cat){
    this.arrayChecked[cat]=!this.arrayChecked[cat];
  }
}
