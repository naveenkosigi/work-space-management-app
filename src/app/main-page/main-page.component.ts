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
  },
  {title:'New announcement',date:'04 Feb, 2019',description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  },
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
