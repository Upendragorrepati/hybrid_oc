import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'ngapp2',
  templateUrl: './ngapp2.component.html',
  styleUrls: ['./ngapp2.component.css']
})
export class Ngapp2Component implements OnInit {

    constructor( @Inject('ngapp1Service') private ngapp1Service) {
        ngapp1Service.setEvent('hello');
        }

    angular1Click() {
      console.log('inside angular 2');
      const buttonText: any = document.getElementById('Angular2').innerText;
      console.log(buttonText);
      this.ngapp1Service.angular1Click(buttonText);
    }

  ngOnInit() {
  }

}
