import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWeatherComponent } from './product-weather.component';

describe('ProductWeatherComponent', () => {
  let component: ProductWeatherComponent;
  let fixture: ComponentFixture<ProductWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
