import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './components/app.component';
import { DashboardService } from './services/dashboard.service';
import { IconPipe } from './pipes/icon.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IconPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    HttpClientModule,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
