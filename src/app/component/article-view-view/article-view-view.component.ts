import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleServiceService } from 'src/app/service/article-service.service';

@Component({
  selector: 'app-article-view-view',
  templateUrl: './article-view-view.component.html',
  styleUrls: ['./article-view-view.component.css']
})
export class ArticleViewViewComponent implements OnInit {
  id:String|undefined;
  article!:Article;
  constructor(private articleService:ArticleServiceService,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.article=new Article();
    this.articleService.getArticleById(this.id).subscribe(data=>{
      console.log(data);
      this.article.newsTitle=data.newsTitle;
      this.article.newsBody=data.newsBody;
      this.article.deploy=data.deploy;
      this.article.newsRegistrationDate=data.newsRegistrationDate;
      this.article.imageName=data.imageName;
      console.log(this.article);
    },
    error=>{
      console.log(error);
      
    })
  }

}
