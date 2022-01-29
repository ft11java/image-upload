import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { ArticleCreateCreateDTO } from '../model/articleCreateCreateDTO';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private baseURL = "http://localhost:8080/api/v1/article";
  constructor(private httpClient: HttpClient) { }

  getArticleById(id:String|undefined):Observable<Article>{
    return this.httpClient.get<Article>(`${this.baseURL}/${id}`)
  }
  
  getAllArtile():Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.baseURL}`);
  }

  createArticle(articleCreateDTO:ArticleCreateCreateDTO):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,articleCreateDTO);
  }

  
}
