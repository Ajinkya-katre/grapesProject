import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  currentYear:any;

  ngOnInit(): void {
     this.currentYear = document.getElementById('demo');
     this.currentYear.innerHTML = new Date().getFullYear(); 
    
  }

}
