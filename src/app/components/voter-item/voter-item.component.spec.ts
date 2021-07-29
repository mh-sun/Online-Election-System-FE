import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterItemComponent } from './voter-item.component';

describe('VoterItemComponent', () => {
  let component: VoterItemComponent;
  let fixture: ComponentFixture<VoterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
