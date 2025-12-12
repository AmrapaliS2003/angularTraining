import { Component, OnInit } from '@angular/core';
import { ApiDashboardService } from 'src/app/services/api-dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  filteredData: any[] = [];
  allPosts: any[] = [];
  searchTitle: string = '';

  constructor(private apiDashboardService: ApiDashboardService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.apiDashboardService.getPosts().subscribe((response: any[]) => {
      this.allPosts = response;
    }, (error: any) => {
      console.error('Error fetching posts:', error);
    });
  }

  filterPosts() {
    if (this.searchTitle.trim() === '') {
      this.filteredData = this.allPosts;
    } else {
      this.filteredData = this.allPosts.filter(post => 
        post.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }
  }
}
