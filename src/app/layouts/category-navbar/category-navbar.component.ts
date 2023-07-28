import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  data: any[] = [];
  constructor(private categoryService: CategoriesService) { }
  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.data = val;
    });

  }

  
}
