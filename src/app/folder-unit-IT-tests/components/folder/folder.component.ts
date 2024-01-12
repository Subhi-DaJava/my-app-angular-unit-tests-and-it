import { Component,Input } from "@angular/core";
import { Folder } from "../../model/folder.class";

@Component({
    selector: "app-folder",
    templateUrl: "./folder.component.html"
})
export class FolderComponent {
    @Input() folder!: Folder;
    public selectedFolder!: any;

    public selectFolder(folder: Folder): void {
        this.selectedFolder = folder;
    }

}
