import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-fleets',
  templateUrl: './my-fleets.component.html',
  styleUrls: ['./my-fleets.component.scss']
})
export class MyFleetsComponent implements OnInit {

  mockFleets: any = [
    { name: "Kings of Summer", newMessages: 3 },
    { name: "Sugar Daddies", newMessages: 0 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
