import { Component, Input, OnInit} from '@angular/core';
import { faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  @Input() element:{title:string,duration:BigInteger,url:string }
  faPlay = faPlay;
  constructor() { }

  ngOnInit(): void {
  }
  calculateTime(d){
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " h , " : " h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min , " : " min ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
    return hDisplay + mDisplay + sDisplay; 
  }

}
