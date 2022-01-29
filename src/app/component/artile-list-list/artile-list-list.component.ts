import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleServiceService } from 'src/app/service/article-service.service';

@Component({
  selector: 'app-artile-list-list',
  templateUrl: './artile-list-list.component.html',
  styleUrls: ['./artile-list-list.component.css']
})
export class ArtileListListComponent implements OnInit {
  articles:Article[]|undefined;

  constructor(private articleService:ArticleServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllArticle();
  }

  private getAllArticle(){
    this.articleService.getAllArtile().subscribe(data=>{
      this.articles=data
    },
    error=>{
      console.log(error);
      
    })
  }

  articleDetails(id:String|undefined){
    console.log(id);
    this.router.navigate(['/view-view',id]);
  }

  

}
