import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesRoutingModule } from './articles-routing.module';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    AjoutArticleComponent,
    DetailArticleComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ArticlesModule {}
