import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from 'src/app/model/album';
import { AlbumSort } from 'src/app/model/albumSort';
import { AlbumServiceService } from 'src/app/service/album-service.service';
import * as Editor from 'ckeditor5/build/ckeditor';
import { ArticleCreateCreateDTO } from 'src/app/model/articleCreateCreateDTO';
import { ArticleServiceService } from 'src/app/service/article-service.service';

@Component({
  selector: 'app-aricle-create-create',
  templateUrl: './aricle-create-create.component.html',
  styleUrls: ['./aricle-create-create.component.css']
})
export class AricleCreateCreateComponent implements OnInit {
  albums:AlbumSort[]|undefined;
  albumm!:Album;
  selectAlbumId:String|undefined;
  public getImage:boolean=false;
  imageURL!: string;
  value:String|undefined;
  articleCreateDTO:ArticleCreateCreateDTO= new ArticleCreateCreateDTO();
 
  newsCreateForm = new FormGroup({
    newsTitle: new FormControl(''),
    newsBody: new FormControl(''),
    deploy: new FormControl(''),
    imageName: new FormControl('')

  })

  constructor(private albumService:AlbumServiceService,
   private articleService:ArticleServiceService,
    private router:Router) { }
  public Editor = Editor;
  ngOnInit(): void {
    this.getAllAlbum();
  }

getAllAlbum(){
  this.albumService.getAllAlbum().subscribe(data=>{
    this.albums=data;
  },
  error=>{
    console.log(error);
    
  })
  }

  getAlbumById(event:any){
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    this.albumm=new Album();
    this.albumService.getAlbumById(value).subscribe(data=>{
      this.albumm=data;
      this.getImage=true;
      console.log(this.albumm);
    },
    error=>{
      console.log(error);
      
    })
  }

  selectedImage(event:any){
    const element = event.currentTarget as HTMLInputElement;
   this.value = element.value;
    console.log(this.value);
    

  }
viewSeletedImage(){
  this.imageURL='http://localhost:8080/api/v1/images/'+this.value;
}

onSubmit() {
  console.log("onsubmit run");
  this.articleCreateDTO = this.newsCreateForm.value;
  this.articleCreateDTO.imageName=this.value;
  console.log(this.articleCreateDTO);
  this.articleService.createArticle(this.articleCreateDTO).subscribe(data => {
    console.log("resim eklendi");
  },
    error => {
      console.log(error);

    })
}

}
