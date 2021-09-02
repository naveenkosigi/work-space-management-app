import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  @Input() announcement : any;

  constructor() { }

  ngOnInit(): void {
  }

}
