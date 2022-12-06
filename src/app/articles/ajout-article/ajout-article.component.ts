import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css'],
})
export class AjoutArticleComponent implements OnInit {
  constructor(private articleService: ArticleService) {}
  ngOnInit() {}
  
  articleForm = new FormGroup({
    category: new FormControl(''),
    title: new FormControl(''),
    img: new FormControl(''),
    message: new FormControl('')
  })


  onSubmitFormGroupe() {
    console.log(this.articleForm.value);
    const nouveauArticle = {
      id: this.articleService.articles.length,
      category: this.articleForm?.value.category || '',
      title: this.articleForm?.value.title || '',
      img: this.articleForm?.value.img || '',
      message: this.articleForm?.value.message || '',
    };
    console.log(nouveauArticle);
    this.articleService.articles.push(nouveauArticle);
  }
}
