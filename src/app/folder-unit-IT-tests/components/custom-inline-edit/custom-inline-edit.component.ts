// CustomInlineEdit Component
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'custom-inline-edit',
    templateUrl: './custom-inline-edit.component.html',
    styleUrls: ['./custom-inline-edit.component.css']
})
export class CustomInlineEditComponent implements OnInit {
  
    @Input() text: string = ''; // Input property to receive text from parent
    @Output() editConfirmed = new EventEmitter<string>();
    @Output() canceled = new EventEmitter<void>();
    editing: boolean = false;
    editedText: string = '';

    ngOnInit(): void {
       
    }

    // Method to confirm edit and emit the updated text
    editTitleConfirmEdit() {
        if (!this.editedText) {
            return;
        }
        this.editConfirmed.emit(this.editedText);
        this.text = this.editedText; // Correction : Mise à jour de la valeur de text avec la valeur de editedText
        this.editing = false;
    }

    // Method to cancel edit and emit the cancel event
    cancelEdit() {
        this.editing = false;
        this.editedText = ''; // Empty the input field when the edit is cancelled
        this.canceled.emit();
    }
}

@NgModule({
    declarations: [CustomInlineEditComponent],
    exports: [CustomInlineEditComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CustomInlineEditModule { } 
