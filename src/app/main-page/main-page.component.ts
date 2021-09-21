import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit,AfterViewInit {
  @ViewChild('modal',{static:false}) modal :any;
  announcementType:string="announcement";

  announcements=[{title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdandskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
  date:'04 Feb, 2019'
  },
  {title:'New announcement',description:'dassndadasdsa asdsajknsdajknsdakjndsaads dsj dssdan sdfnfdsndfs jkdsfnjfdsnkdfs dfsjk fdkdsfnjfdsnjsdnkjfdnjkdfsdfjksdfnjfdnkjfdsnjkfdsnkjdfs fdsndsfjnfsdjnfdkjsndfkjdsffd kdfsnsdfjnfdskjnfdjkfdskjnfsdjkfdnkfdsnjkfsdfds dsnfdjknfdjkndfjkfds jdsnfkjdsnjkfdnfkdjsnfdsjknfdkjnfddfs kjdsnfjkndfskjfndjfdsn dfjsnfsdjnfdskjnsdfjfdsnjkdfsndfnfds dsnfdsjnfsdkjnfds jndsjnfdjnfdsjknfdsjnfdjknffsd dskjasdjknadsjsaddsasd kdsasjkdansdnsdkjnsdkjnsdjknsadkjndsajkasdnjkdsa sadasjnsdakjnsdkjasndjsadns dadsansadnkjsadnasjdnkjsdansad sanasdjkndsanasdsda',
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

  ngAfterViewInit():void{
    var modal : HTMLElement = document.getElementById("myModal") as HTMLElement;

    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span : HTMLElement = document.getElementsByClassName("close")[0] as HTMLElement;

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  addAnnouncement() : void{
    this.modal.nativeElement.style.display="block";
  }
}
