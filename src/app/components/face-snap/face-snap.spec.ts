import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaceSnap } from './face-snap.compoent';

describe('FaceSnap', () => {
  let component: FaceSnap;
  let fixture: ComponentFixture<FaceSnap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnap],
    }).compileComponents();

    fixture = TestBed.createComponent(FaceSnap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
