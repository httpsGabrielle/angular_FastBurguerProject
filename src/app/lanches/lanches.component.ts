import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FOODS } from './../mock-foods';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  styleUrls: ['./lanches.component.css']
})
export class LanchesComponent implements OnInit {
  foods = FOODS;
  selectedFood? : Food;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(food: Food): void {
  this.selectedFood = food;
}
}

 