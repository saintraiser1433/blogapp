import { Component, Input, OnInit } from '@angular/core';

import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() id!: string;

  data: any = [];
  dataFeatured: any[] = [];
  constructor(private postService: PostsService) {


  }


  ngOnInit(): void {
    this.postService.loadOnePost(this.id).subscribe(val => {
      this.data = val;
      this.loadSimilarPost(this.data.category.categoryId)
    });
  }
  loadSimilarPost(catid: any) {
    this.postService.loadSimilar(catid).subscribe(val => {
      this.dataFeatured = val;
    });
  }
}
