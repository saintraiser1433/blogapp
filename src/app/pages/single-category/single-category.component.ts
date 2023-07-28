import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  datapost: any[] = [];
  categoryName!: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(val => {
      this.categoryName = val.get('category');
      this.postService.loadCategoryPost(val.get('id')).subscribe(post => {
        this.datapost = post;
      });
    })
  }
}
