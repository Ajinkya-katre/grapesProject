import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  url:string = "http://mapandmagnets.com/wp-content/uploads/2018/03/plucked-grapes-nilgiris.jpg";

  imgSrc = [
    {url:'http://mapandmagnets.com/wp-content/uploads/2018/03/plucked-grapes-nilgiris.jpg'},
    {url:'https://images.pexels.com/photos/1317917/pexels-photo-1317917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {url:'https://images.pexels.com/photos/197910/pexels-photo-197910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {url:'https://images.pexels.com/photos/760280/pexels-photo-760280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    
  ]

  changeImage(event:any)
  {
   this.url = event.target.src;
  }


}
