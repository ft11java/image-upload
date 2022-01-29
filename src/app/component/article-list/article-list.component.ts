import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageDTO } from 'src/app/model/imageDTO';
import { News } from 'src/app/model/news';
import { ImageUploadServiceService } from 'src/app/service/image-upload-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
newses:News[]|undefined;
filterNewses:News[]|undefined;
getimage:String|undefined;
image:String="92865f98-7b49-4cdf-856b-73a3c8a3b550.jpg";
imageDTO:ImageDTO|undefined;
retrievedImage: String|undefined;
  
  constructor(private imageUploadService:ImageUploadServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllNewsList();
    this.imageGet(this.image);
  }

  private getAllNewsList(){
    this.imageUploadService.getAllNews().subscribe(data=>{
      this.newses=data;
      this.filterNewses=data;
    },
    error=>{
      console.log(error);
      
    })

  }

  articleDetails(id:String|undefined){
    console.log(id);
    this.router.navigate(['/view',id]);
  }

  search(searchText:string):void{
  
    searchText=searchText.toLowerCase();
    console.log(searchText);
    this.filterNewses=this.newses?.filter((news:News)=>{
      return news.newsBody!.toLowerCase().indexOf(searchText)>-1 ;
    })
    }

    imageGet(imagename:String){
     this.imageUploadService.getImageById(imagename).subscribe(data=>{
      this.imageDTO=data;
      this.retrievedImage=this.imageDTO.image;
     })
   }
}
