import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Feijoada do cão', 'This is the best food ever', 'http://millarestaurante.com.br/wp-content/uploads/2017/10/Milla-Restaurante-e-Pizzaria-Feijoada-Grande.jpg'),
    new Recipe('Lasanha do Satanás', 'Massa satânica para todos', 'https://guiadacozinha.com.br/wp-content/uploads/2017/08/receitas-lasanha.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
