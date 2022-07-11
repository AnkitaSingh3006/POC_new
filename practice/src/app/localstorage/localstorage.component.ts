import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.title = localStorage.getItem("token")
  }


title:any;
add(){
  this.title="This is the practice of localstorage";
  localStorage.setItem("token",this.title)
}

remove(){
  localStorage.removeItem("token")
}

 

}
