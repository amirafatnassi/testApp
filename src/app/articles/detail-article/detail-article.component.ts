import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent {
  constructor(private articleService: ArticlesService, private route:ActivatedRoute ){

  }
  article: any;
  articleId:any;
  ngOnInit():void{
    this.articleId=this.route.snapshot.params['id'];
    this.article=this.articleService.articles[this.articleId];
  }
}
