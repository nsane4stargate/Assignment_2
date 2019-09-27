import { Injectable } from '@angular/core';
import { MyButtonComponent } from './my-button/my-button.component'

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  constructor(
    private buttonComponent: MyButtonComponent
  ) {}

  /* The service method likeImage should accept a 
     boolean parameter and return a banged version 
     of the param. So every time the user clicks 
     the button this should update the member property. 
  */

  likeImage(flag: boolean){ return this.buttonComponent.flag = flag }
}
