import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonOutputComponent } from './mon-output.component';
import { By } from '@angular/platform-browser';
import { trigger } from '@angular/animations';

describe('MonOutputComponent', () => {
  let component: MonOutputComponent;
  let fixture: ComponentFixture<MonOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonOutputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MonOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*
  A savoir

EventEmitter est en effet une classe qui implémente la classe
Subject de RxJS. 
Cela signifie qu'il peut être utilisé pour 
émettre des événements asynchrones à partir d'un composant 
et que ces événements peuvent être observés à l'aide de 
la méthode .subscribe().
  */

  it('should emit data when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));

    let dataEmitted;
    component.myEvent.subscribe(data => dataEmitted = data);

    button?.triggerEventHandler('click', null);

    expect(dataEmitted).toEqual('Hello world');

  });
});
