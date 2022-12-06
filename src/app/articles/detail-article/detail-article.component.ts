import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
})
export class DetailArticleComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}
  article: any;
  articleId: any;
  ngOnInit(): void {
    this.articleId = this.route.snapshot.params['id'];
    this.article = this.articleService.articles[this.articleId];
  }
}
