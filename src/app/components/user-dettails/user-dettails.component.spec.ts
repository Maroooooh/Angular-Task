import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDettailsComponent } from './user-dettails.component';

describe('UserDettailsComponent', () => {
  let component: UserDettailsComponent;
  let fixture: ComponentFixture<UserDettailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDettailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDettailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
