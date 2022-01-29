import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUploadDTO } from '../model/image-uploadDTO';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadUploadServiceService {
  private baseURL = "http://localhost:8080/api/v1/image";
  constructor(private httpClient: HttpClient) { }

  imageupload(imageUploadDTO:ImageUploadDTO):Observable<Object>{
    const uploadImageData = new FormData();
    uploadImageData.append('image',imageUploadDTO.data);
    uploadImageData.append('albumId',imageUploadDTO.albumId);

    return this.httpClient.post<Object>(`${this.baseURL}`,uploadImageData);
  }
}
