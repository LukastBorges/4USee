import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  url = 'https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline';
  
  constructor(private http: HttpClient) {}
  
  getDashboard(): Observable<Object> {
    return this.http.get(this.url);
  }
    
}
