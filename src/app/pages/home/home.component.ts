import { Component } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datas: any[] = [];
  dataFeatured: any[] = [];
  constructor(private postService: PostsService) {
    this.postService.loadData().subscribe(val => {
      this.datas = val;
    })

    this.postService.loadDataFeatured().subscribe(val => {
      this.dataFeatured = val;
    })

  }


}
