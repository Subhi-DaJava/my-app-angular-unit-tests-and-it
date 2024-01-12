import { Folder } from "../../model/folder.class";
import { FolderComponent } from "./folder.component";

describe("selectFolder", () => {
    let component: FolderComponent;

    beforeEach(() => {
        component = new FolderComponent();
    });

    it("should update selectedFolder property with passed folder", () => {
        // arrange
        component.selectedFolder = undefined;
        let folder: Folder = new Folder(1, "Angular 17");

        // act
        component.selectFolder(folder);

        // assert
        expect(component.selectedFolder).toBe(folder);
        expect(component.selectedFolder).toEqual(folder);
        expect(component.selectedFolder).not.toBeNull();
        expect(component.selectedFolder).toBeTruthy();
        expect(component.selectedFolder).toBeDefined();
        expect(component.selectedFolder.title).toBe("Angular 17");
    });
});