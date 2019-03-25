import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  viewName: string;
  @Output() switchViewFired = new EventEmitter<string>();

  onSelect(view: any){
    this.viewName = view.target.textContent;
    this.switchViewFired.emit(this.viewName);
  }

}
