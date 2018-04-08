import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '4YouSee Challenge';
  private loading: boolean;
  private data: any[];
  private filters: any[];
  private activeFilter: string;
	 
  constructor (private dashboardService: DashboardService) { }
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.dashboardService.getDashboard()
      .subscribe(response => {
        let temp = [];
        this.data = response as any[];
        this.data.map(elmt => {
          if (temp.indexOf(elmt.category) === -1) {
            temp.push(elmt.category);
          }
        });
        this.filters = temp;
        this.loading = false;
      });
  }

  setFilter(filter: string) {
    this.activeFilter = filter === this.activeFilter ? '' : filter;
    this.getData();
  }
}
