import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SomeComponent } from './some.component';
import { ActivatedRouteMock } from '../../activated-route-mock/activated-route-mock';


describe('SomeComponent', () => {
    let component: SomeComponent;
    let fixture: ComponentFixture<SomeComponent>;
    let activatedRoute: ActivatedRouteMock;

    beforeEach(async () => {
        activatedRoute = new ActivatedRouteMock();

        await TestBed.configureTestingModule({
            declarations: [ SomeComponent ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRoute }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(SomeComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should print "Say Hello" when type is "Hello"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        activatedRoute.setParams({ type: 'Hello' });

        component.ngOnInit();

        expect(consoleSpy).toHaveBeenCalledWith('Say Hello');
        consoleSpy.mockClear();
    });

    it('should print "Say Bye" when type is "Bye"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        activatedRoute.setParams({ type: 'Bye' });

        component.ngOnInit();

        expect(consoleSpy).toHaveBeenCalledWith('Say Bye');
        consoleSpy.mockClear();
    });

    it('should not print anything when type is not "Hello" or "Bye"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        activatedRoute.setParams({ type: 'Something else' });
      
        component.ngOnInit();
      
        expect(consoleSpy).not.toHaveBeenCalled();
      });

});