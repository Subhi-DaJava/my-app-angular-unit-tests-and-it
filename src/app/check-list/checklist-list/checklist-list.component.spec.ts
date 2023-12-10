import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ChecklistListComponent, ChecklistListModule} from './checklist-list.component';
import {By} from "@angular/platform-browser";

// Clicking add `button` to create a new checklist and starting with the dumb/foolish Component

describe('ChecklistListComponent', () => {
  let component: ChecklistListComponent;
  let fixture: ComponentFixture<ChecklistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ChecklistListModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistListComponent);
    component = fixture.componentInstance;

    component.checklists = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input: checklists', () => {
    it('should display/render empty message when checklist are empty ', () => {
      const testData = [] as any;
      // assign the test data to the component's input
      component.checklists = testData;

      fixture.detectChanges(); // the result of this change reflects in the DOM
      const emptyMessage = fixture.debugElement.query(By.css('[data-testid="no-checklists-message"]'));

      expect(emptyMessage).toBeTruthy();
      expect(emptyMessage.nativeElement.textContent).toContain('Click the add button to create a checklist !');
    });

    it('should NOT render/display empty message when checklist are NOT empty ', () => {
      const testData = [{id: 1, name: 'Jest in Angular'}] as any;
      // assign the test data to the component's input
      component.checklists = testData;

      fixture.detectChanges(); // the result of this change reflects in the DOM
      const emptyMessage = fixture.debugElement.query(By.css('[data-testid="no-checklists-message"]'));

      expect(emptyMessage).toBeFalsy();
    });

    describe('output: delete', () => {
      it('should emit checklist id to be deleted', () => {
        const testData = [{id: '1', name: 'Jest in Angular'}] as any;
        component.checklists = testData;
        const deleteSpy = jest.spyOn(component.delete, 'emit');
        fixture.detectChanges();
        const deleteButton = fixture.debugElement.query(By.css('[data-testid="delete-checklist"]'));

        //deleteButton.triggerEventHandler('click', null);
        deleteButton.nativeElement.click();
        expect(deleteSpy).toHaveBeenCalledWith('1');
        expect(deleteSpy).toHaveBeenCalledTimes(1);
        expect(deleteSpy.mock.calls[0][0]).toEqual(testData[0].id);
      });

      it('should display/render checklist name', () => {
        const testData = [{id: '1', name: 'Jest in Angular'}, {}, {}] as any;
        component.checklists = testData;
        fixture.detectChanges();

        const checklistName = fixture.debugElement.queryAll(By.css('[data-testid="checklist-item"]'));

        expect(checklistName.length).toEqual(testData.length);
        expect(checklistName[0].nativeElement.textContent).toContain('Delete');
      });
    });

  });

});
