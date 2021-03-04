import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wild-cards',
  templateUrl: './wild-cards.component.html',
  styleUrls: ['./wild-cards.component.scss']
})
export class WildCardsComponent implements OnInit {
public items :string[]=['/assets/WildCard/jilo.jpg','222','333']
  constructor() { }

  ngOnInit(): void {
  }

}
