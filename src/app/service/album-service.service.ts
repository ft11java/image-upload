import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';
import { AlbumSort } from '../model/albumSort';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private baseURL = "http://localhost:8080/api/v1/album";
  constructor(private httpClient: HttpClient) { }

  getAlbumById(id:String|undefined):Observable<Album>{
    return this.httpClient.get<Album>(`${this.baseURL}/${id}`);
  }

  getAllAlbum():Observable<AlbumSort[]>{
    return this.httpClient.get<AlbumSort[]>(`${this.baseURL}`);
  }
  
}
