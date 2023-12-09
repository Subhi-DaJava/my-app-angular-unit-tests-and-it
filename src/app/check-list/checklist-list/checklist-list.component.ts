import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
// Clicking the add `button` to create a new checklist

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css']
})
export class ChecklistListComponent{
  @Input() checklists!: any[] ;
  @Output() delete = new EventEmitter<string>();
}

@NgModule({
  declarations: [ChecklistListComponent],
  exports: [ChecklistListComponent],
  imports: [
    CommonModule
  ]
})
export class ChecklistListModule {
}

