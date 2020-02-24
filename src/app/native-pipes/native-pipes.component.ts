import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-pipes',
  templateUrl: './native-pipes.component.html',
  styleUrls: ['./native-pipes.component.css']
})
export class NativePipesComponent implements OnInit {

  car: any = {};

  constructor() { }

  ngOnInit() {

    this.car = {
      type: 'passeio',
      price: 44455.565,
      date: new Date(),
      rating: 4.5654,
      url: 'htts://www.buyacar.com'
    }
  }

}
