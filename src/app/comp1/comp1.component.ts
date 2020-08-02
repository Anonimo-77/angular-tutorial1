import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  users = [
    {
      username: 'user1',
      age: 22,
      pro: false
    },
    {
      username: 'user2',
      age: 19,
      pro: false
    },
    {
      username: 'user3',
      age: 17,
      pro: true
    },
    {
      username: 'user4',
      age: 32,
      pro: false
    },
    {
      username: 'user5',
      age: 41,
      pro: false
    },
    {
      username: 'user6',
      age: 29,
      pro: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
