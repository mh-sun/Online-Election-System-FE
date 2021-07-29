import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionItemComponent } from './election-item.component';

describe('ElectionItemComponent', () => {
  let component: ElectionItemComponent;
  let fixture: ComponentFixture<ElectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
