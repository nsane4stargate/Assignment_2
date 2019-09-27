import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButtonComponent implements OnInit {

  /* Properties */
  flag : boolean = false
  service : MyServiceService
  constructor() {}

  ngOnInit() {
    
  }

  /*
    When a user clicks the “like” button next to the image it should 
    call a member function in the my-button component which passes a 
    boolean member property to a service called my-service.
  */

  sendToMyService(flag: boolean){
    this.service.likeImage(flag);
  }
}
