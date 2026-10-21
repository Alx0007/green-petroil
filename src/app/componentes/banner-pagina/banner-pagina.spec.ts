import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerPagina } from './banner-pagina';

describe('BannerPagina', () => {
  let component: BannerPagina;
  let fixture: ComponentFixture<BannerPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
