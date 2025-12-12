import { Component, OnInit } from '@angular/core';
import { ApiDashboardService } from 'src/app/services/api-dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchName: string = '';
  allUsers: any[] = [];
  filteredData: any[] = [];

  constructor(private apiDashboardService: ApiDashboardService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.apiDashboardService.getUsers().subscribe((response: any[]) => {
      this.allUsers = response;
    }, (error: any) => {
      console.error('Error fetching users:', error);
    });
  }
    filterPosts() {
    if (this.searchName.trim() === '') {
      this.filteredData = this.allUsers;
    } else {
      this.filteredData = this.allUsers.filter(user => 
        user.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  }
}
