import { Component, Input } from '@angular/core';
import { ArticleService } from './services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  constructor(private articleService: ArticleService) {}
  today = new Date();
  articles = this.articleService.articles;
  categories=this.articleService.categories;

  ngOnInit(): void {
    console.log('hello');
  }
}
