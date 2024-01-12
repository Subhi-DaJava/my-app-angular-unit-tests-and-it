import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComponent as MonComposantComponent } from './mon.composant.component';
import { By } from '@angular/platform-browser';

describe('MonComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonComposantComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Liste des utilisateurs'`, () => {
    //const titleElement = fixture.nativeElement.querySelector('h1');
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(titleElement.textContent).toEqual('Liste des utilisateurs');
  });

  it('should have a button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(buttonElement).toBeTruthy();
  });

  it('should add a user when clicking on the button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    const usersLength = component.users.length;

    buttonElement.click();
    //buttonElement?.triggerEventHandler('click', null); is not a function
    fixture.detectChanges();
    /*
    L'appel à fixture.detectChanges() après le clic sur le bouton est nécessaire pour que
    les modifications apportées au composant soient reflétées dans la vue. 
    En effet, lorsque le bouton est cliqué,
    cela peut déclencher des mises à jour du modèle de données du composant, 
    mais ces mises à jour ne seront pas reflétées dans la vue tant que fixture.detectChanges() n'a pas été appelé.
    */

    const users = fixture.debugElement.queryAll(By.css('li')).map((li) => li.nativeElement.textContent);

    expect(component.users.length).toEqual(usersLength + 1);
    expect(users[2]).toEqual('Nouvel utilisateur');
  
  });

});
