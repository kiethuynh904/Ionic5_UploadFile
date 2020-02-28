import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeCarePage } from './take-care.page';

describe('TakeCarePage', () => {
  let component: TakeCarePage;
  let fixture: ComponentFixture<TakeCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeCarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
