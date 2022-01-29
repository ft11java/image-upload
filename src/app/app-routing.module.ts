import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AricleCreateCreateComponent } from './component/article-create-create/aricle-create-create.component';
import { ArticleCreateComponent } from './component/article-create/article-create.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleViewViewComponent } from './component/article-view-view/article-view-view.component';
import { ArticleViewComponent } from './component/article-view/article-view.component';
import { ArtileListListComponent } from './component/artile-list-list/artile-list-list.component';
import { DataTableMdComponent } from './component/data-table-md/data-table-md.component';
import { HomeComponent } from './component/home/home.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'view/:id', component: ArticleViewComponent },
  { path: 'article-create', component: ArticleCreateComponent },
  { path: 'article-create-create', component: AricleCreateCreateComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'data-table-md', component: DataTableMdComponent },
  { path: 'article-list-list', component: ArtileListListComponent },
  { path: 'view-view/:id', component: ArticleViewViewComponent },
  { path: 'image-upload', component: ImageUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
