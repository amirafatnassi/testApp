import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ArticlesComponent } from './articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'add', component: AjoutArticleComponent },
  { path: 'detail/:id', component: DetailArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
