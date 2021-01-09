import { Component } from '@angular/core';
import contentFile from './_files/content.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = contentFile;
  title = 'prisma-it-angular';
  totalDuration=[];

  calculateTotDurarion(index){
    let count = 0;
    
      this.categories[index].slides.forEach(element => {
        
        count+=Number(element.duration);
        console.log(count);
      });
    
    this.totalDuration[index]=count;
    console.log(this.totalDuration[index]);
    return this.calculateTime(this.totalDuration[index]);
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
}
