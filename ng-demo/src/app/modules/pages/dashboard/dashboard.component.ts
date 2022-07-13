import { Component, OnInit } from '@angular/core';
import { UserResponse } from '@app/core/models/user';
import { DataService } from '@app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  users: UserResponse[] = [];
  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.dataService.getList().subscribe(
      (response) => {
        this.users = response.data;
      }
    );
  }

  sortList(field: string): void {
    this.users.sort((a: any, b: any) => {
      if (a[field] < b[field])
        return -1;
      else if (a[field] > b[field])
        return 1;
      else
        return 0;
    });
  }

}
