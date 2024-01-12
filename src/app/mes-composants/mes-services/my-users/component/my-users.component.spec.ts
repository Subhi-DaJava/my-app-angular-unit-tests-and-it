import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyUsersComponent } from './my-users.component';
import { UsersService } from '../service/users.service';
import { of } from 'rxjs';
/*
users$: C'est un Observable qui renvoie une liste d'utilisateurs.
Dans un vrai scénario, cela pourrait être une liste récupérée d'une API.
Mais pour notre test, nous utilisons of() de rxjs pour créer un Observable 
qui renvoie simplement une liste prédéfinie d'utilisateurs.

getAll(): C'est une méthode qui renvoie un Observable.
Dans un vrai scénario, cela pourrait être une méthode qui appelle une API
pour récupérer une liste d'utilisateurs.
Mais pour notre test, nous utilisons jest.fn() pour créer une méthode
qui ne fait rien et qui renvoie un Observable vide.
*/

describe('MyUsersComponent', () => {
  let component: MyUsersComponent;
  let fixture: ComponentFixture<MyUsersComponent>;
  let usersServiceStub: Partial<UsersService>;

  beforeEach(async () => {
    usersServiceStub = {
      users$: of([
        { id: 1, name: 'John', email: 'john@test.com' },
        { id: 2, name: 'Jane', email: 'jane@test.com' }
      ]),
      getAll: jest.fn(() => {
        return of();
      })
    };
    /*
    TestBed est la principale API d'Angular pour tester des composants et 
    d'autres éléments. 
    Il nous permet de créer un environnement de test pour notre composant.
    provide: UserService: Cela indique à Angular que nous allons fournir 
    quelque chose pour remplacer le UserService normal dans 
    ce contexte de test.

    useValue: userServiceStub: C'est ici que nous disons à Angular 
    d'utiliser notre faux service (stub) à la place du vrai UserService. 
    Ainsi, lorsque notre composant demande une instance de UserService, 
    il recevra notre stub à la place.
    */

    await TestBed.configureTestingModule({
      declarations: [MyUsersComponent],
      // Fournir le Stub à TestBed
      providers: [{ provide: UsersService, useValue: usersServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users on initialization', () => {
    component.ngOnInit();
    expect(usersServiceStub.getAll).toHaveBeenCalled();
  });

  /*
  Le code ci-dessous teste le comportement de l'observable users$ 
  dans notre composant.
  'component.users$.subscribe()': Cela souscrit à l'observable users$. 
  Lorsque cet observable émet des valeurs (c'est-à-dire envoie des données), 
  la fonction à l'intérieur de subscribe() est exécutée.
*/

  it('should have users populated form observable', () => {
    component.users$.subscribe(users => {
      expect(users.length).toBe(2);
      expect(users[0].name).toBe('John');
      expect(users[1].name).toBe('Jane');
    });
  });

});
