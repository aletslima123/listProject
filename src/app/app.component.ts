import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;

  onSwitchViewFired(viewName){
    if(viewName === 'Recipes'){
      this.showRecipes = true;
    } else {
      this.showRecipes = false;
    }
  }
}
