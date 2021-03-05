import { Component, OnInit } from '@angular/core';
import * as interfaces   from './IWildCards';
import * as models from './WildCards';
 @Component({
  selector: 'app-wild-cards',
  templateUrl: './wild-cards.component.html',
  styleUrls: ['./wild-cards.component.scss']
})
export class WildCardsComponent implements OnInit {
  // public items: string[] = ['/assets/WildCard/jilo.jpg', '222', '333']
 public constructor(){
   this.item = new models.WildCards()

 }
  ngOnInit(): void {
  }

  public item:interfaces.IWildCards;
}

