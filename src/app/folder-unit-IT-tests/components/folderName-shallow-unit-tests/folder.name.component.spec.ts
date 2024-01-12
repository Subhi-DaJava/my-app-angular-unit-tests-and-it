import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FolderNameComponent, FolderNameModule } from './folder-name.component';
import { Folder } from '../../model/folder.class';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { DebugElement } from '@angular/core';

describe('FolderNameComponent test suites', () => {
    let component: FolderNameComponent;
    let fixture: ComponentFixture<FolderNameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FolderNameModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FolderNameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display initial title', () => {

        const titleElement: DebugElement = fixture.debugElement.query(By.css('[data-testid="folder-title"]'));
        expect(titleElement).toBeTruthy();
        expect(titleElement.attributes["ng-reflect-text"]).toBe(component.folderTitle);
    });

    it("should set input property 'text' equal to folder title in <custom-inline-edit/>", () => {
        // arrange
        const folder: Folder = component.folder = {
            id: 1,
            title: 'Angular 17',
        };
        fixture.detectChanges();

        // act
        const inlineEditElement: DebugElement = fixture.debugElement.query(By.css("custom-inline-edit"));

        // assert
        expect(inlineEditElement.attributes["ng-reflect-text"]).toBe(folder.title);
    });

    it('should update title on edit confirmed', () => {
        component.folder.title = 'Initial Title';

        const newTitle = 'New Title';

        fixture.detectChanges();

        const folderUpdatedSpy = jest.spyOn(component.folderUpdated, 'emit');

        const inlineEditElement: DebugElement = fixture.debugElement.query(By.css("custom-inline-edit"));

        inlineEditElement.triggerEventHandler('editConfirmed', 'New Title');

        fixture.detectChanges();
        let emittedFolder: Folder = folderUpdatedSpy.mock.calls[0][0];


        setTimeout(() => {
            expect(folderUpdatedSpy).toHaveBeenCalled();
            expect(inlineEditElement.attributes["ng-reflect-text"]).toBe(newTitle);
            expect(emittedFolder.title).toBe(newTitle);
        });
    });

    describe('should update title on edit confirmed, IT test suites', () => {
        it("should emit folder with the new title on Enter key", () => {
            // arrange
            const folderUpdatedSpy = jest.spyOn(component.folderUpdated, 'emit');

            // act
            const inlineEditElement: DebugElement = fixture.debugElement.query(By.css("custom-inline-edit"));
            const inlineEditInputElement: any = inlineEditElement.nativeElement;

            inlineEditInputElement.value = "Java Script";
            inlineEditInputElement.dispatchEvent(new Event("input"));
            inlineEditElement.triggerEventHandler("keydown.enter", null);

            // assert
            setTimeout(() => {
                let emittedFolder: Folder = folderUpdatedSpy.mock.calls[0][0];
                expect(emittedFolder.title).toEqual("Java Script");
                expect(inlineEditElement.attributes["ng-reflect-text"]).toBe("Java Script");
                expect(folderUpdatedSpy).toHaveBeenCalled();
            });  
            
        });

    });
});