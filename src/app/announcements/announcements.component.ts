import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit,AfterViewInit {
  @Input() announcement : any;
  @ViewChild('announcementComponent',{static:false}) announcementComponent :any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    window.setTimeout(() => {
      this.announcementComponent.nativeElement.style.display="";
      this.announcementComponent.nativeElement.classList.add('slider-animate');
    },1000);
  }


}
