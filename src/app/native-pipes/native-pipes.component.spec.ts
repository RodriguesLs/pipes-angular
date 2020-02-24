import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativePipesComponent } from './native-pipes.component';

describe('NativePipesComponent', () => {
  let component: NativePipesComponent;
  let fixture: ComponentFixture<NativePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
