import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http'

import { DashboardService } from '../services/dashboard.service';
import { IconPipe } from '../pipes/icon.pipe';
import { CategoryPipe } from '../pipes/category.pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        IconPipe,
        CategoryPipe
      ],
      providers: [
        DashboardService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '4YouSee Challenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('4YouSee Challenge');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('4YouSee Challenge');
  }));
});
