import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlbumSort } from 'src/app/model/albumSort';
import { ImageUploadDTO } from 'src/app/model/image-uploadDTO';
import { AlbumServiceService } from 'src/app/service/album-service.service';
import { ImageUploadUploadServiceService } from 'src/app/service/image-upload-upload-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
    
    imageUploadForm = new FormGroup({
    albumId: new FormControl(''),
    data: new FormControl('')
  })
  albums:AlbumSort[]|undefined;
  imageURL!: string;
  imageUploadDTO:ImageUploadDTO=new ImageUploadDTO();

  constructor(private imageUploadService:ImageUploadUploadServiceService,
    private albumService:AlbumServiceService) { }

  ngOnInit(): void {
    this.getAllAlbum();
    
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.imageUploadForm.patchValue({
      data: file
    });

    console.log(this.imageUploadForm.value);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    console.log("onsubmit run");
    this.imageUploadDTO = this.imageUploadForm.value;
    console.log(this.imageUploadForm);
    this.imageUploadService.imageupload(this.imageUploadDTO).subscribe(data => {
      Swal.fire({
        title: 'Bilgi',
        text: 'Resim Eklendi',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    },
      error => {
        console.log(error);

      })
  }

  getAllAlbum(){
    this.albumService.getAllAlbum().subscribe(data=>{
      this.albums=data;
    },
    error=>{
      console.log(error);
      
    })
    }

}
