import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  url:string = "assets/mobile.jpg";

  changeImage(event:any)
  {
   this.url = event.target.src;
  }

}
