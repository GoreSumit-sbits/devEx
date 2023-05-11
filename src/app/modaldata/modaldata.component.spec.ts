import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldataComponent } from './modaldata.component';

describe('ModaldataComponent', () => {
  let component: ModaldataComponent;
  let fixture: ComponentFixture<ModaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
