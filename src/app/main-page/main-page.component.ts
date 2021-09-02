import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  announcements=[{title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdandskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
  date:'04 Feb, 2019'
  },
  {title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdandskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
  date:'04 Feb, 2019'
  },
  {title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdandskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
  date:'04 Feb, 2019'
  },
  {title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdandskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
  date:'04 Feb, 2019'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
