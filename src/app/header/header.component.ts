import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();

  value:boolean = true;

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
