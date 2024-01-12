// FolderNameComponent
import { Component, Input, Output, EventEmitter, NgModule, OnInit } from '@angular/core';
import { CustomInlineEditModule } from '../custom-inline-edit/custom-inline-edit.component';
import { CommonModule } from '@angular/common';
import { Folder } from '../../model/folder.class';

@Component({
    selector: 'folder-name',
    templateUrl: './folder-name.component.html',
    styleUrls: ['./folder-name.component.css']
})
export class FolderNameComponent implements OnInit {
    
    @Input() folder: any = { title: "Initial Title", id: 1 }; // Assuming 'folder' is an object with a 'title' property
    @Output() folderUpdated = new EventEmitter<any>();
    @Output() editFolderCanceled = new EventEmitter<void>();

    // Getter for folderTitle to be used in the template
    get folderTitle(): string {
        return this.folder ? this.folder.title : '';
    }

    ngOnInit(): void {
        
    }

    // Method called when the edit is confirmed
    public editTitleConfirmed(title: string): void {
        if (!title) {
            return;
        }
        // Emit an event with the updated folder object
        this.folderUpdated.emit({ ...this.folder, title: title });
    }
}

@NgModule({
    declarations: [FolderNameComponent],
    exports: [FolderNameComponent],
    imports: [
        CommonModule,
        CustomInlineEditModule]
})  
export class FolderNameModule { }

