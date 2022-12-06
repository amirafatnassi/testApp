import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css'],
})
export class AjoutArticleComponent implements OnInit {
  constructor(private articleService: ArticlesService) {}
  ngOnInit() {}
  
  articleForm = new FormGroup({
    category: new FormControl(''),
    title: new FormControl(''),
    img: new FormControl(''),
    message: new FormControl('')
  })


  onSubmit(form: NgForm) {
    console.log(form.value);
    const nouveauArticle = { id: this.articleService.articles.length, ...form.value };
    console.log(nouveauArticle);
    this.articleService.articles.push(nouveauArticle);
    console.log(this.articleService.articles);
  }
  
  onSubmitFormGroupe() {
    console.log(this.articleForm.value);
    const nouveauArticle = {
      id: this.articleService.articles.length,
      category: this.articleForm.value.category,
      title: this.articleForm.value.title,
      img: this.articleForm.value.img,
      message: this.articleForm.value.message,
    };
    console.log(nouveauArticle);
    this.articleService.articles.push(nouveauArticle);
  }
}
