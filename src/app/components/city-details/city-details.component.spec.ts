import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CityDetailsComponent } from './city-details.component';
import { HttpService } from 'src/app/services/http.service';

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule ],
      declarations: [ CityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', (() => {
    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    component.cities = [];
    component.name = 'Paris'
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.heading').textContent).toContain('Details for Paris at 9:00');
  }));
});
