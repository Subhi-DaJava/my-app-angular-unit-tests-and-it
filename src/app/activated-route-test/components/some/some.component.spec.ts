/*
 Provide `ActivatedRouteMock` to Jest so when it see the `ActivatedRoute` instance on the 
 `SomeComponent` it will use the mock class instead of the actual `ActivatedRoute` class which is not instantiated.
*/
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SomeComponent } from "./some.component";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteMock } from "../../activated-route-mock/activated-route-mock";

describe('SomeComponent', () => {
    let component: SomeComponent; // Declare the component variable
    beforeEach(async () =>{
        await TestBed.configureTestingModule({
            declarations: [ SomeComponent ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useClass: ActivatedRouteMock
                }
            ]
        }).compileComponents();
    
        let fixture: ComponentFixture<SomeComponent>; // Declare the fixture variable
    
        fixture = TestBed.createComponent(SomeComponent); // Assign the created component to the fixture
        component = fixture.componentInstance;
    
        fixture.detectChanges();
    
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should print "Say Hello" when type is "Hello"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        component.ngOnInit();

        expect(consoleSpy).toHaveBeenCalledWith('Say Hello');
        consoleSpy.mockClear();
    });
});