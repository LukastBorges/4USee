import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './components/app.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HttpClientModule,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
