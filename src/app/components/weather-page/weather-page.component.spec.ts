import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherPageComponent } from './weather-page.component';
import { HttpService } from 'src/app/services/http.service';

describe('WeatherPageComponent', () => {
  let component: WeatherPageComponent;
  let fixture: ComponentFixture<WeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule],
      declarations: [WeatherPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have columns for display`, (() => {
    fixture = TestBed.createComponent(WeatherPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.displayedColumns).toEqual(['cityName', 'temperature', 'sunrise', 'sunset']);
  }));

  it('should render title in a h1 tag', (() => {
    fixture = TestBed.createComponent(WeatherPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Weather Details');
  }));

  it("should use the getCitiesList from the service", () => {
    let getCitiesSpy: any;
    const httpService = fixture.debugElement.injector.get(HttpService);
    getCitiesSpy = spyOn(httpService, 'getCitiesList').and.callThrough();
    fixture = TestBed.createComponent(WeatherPageComponent);
    fixture.detectChanges();

    expect(getCitiesSpy).toHaveBeenCalled();
  });
});
