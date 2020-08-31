import { Component, OnInit } from '@angular/core';
import{SharedserviceequityService} from '../shared/sharedserviceequity.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-equityupload',
  templateUrl: './equityupload.component.html',
  styleUrls: ['./equityupload.component.scss']
})


export class EquityuploadComponent implements OnInit {

  constructor(public service:SharedserviceequityService) { }
  //@Input()
  FileName:string;
  FilePath:string;


  ngOnInit(): void {
  }


  uploadfile(event){
    alert("uploaded succesfully");
    var file=event.target.files[0];
    const formdata :FormData=new FormData();
    formdata.append('uploadedFile',file,file.name);
    this.service.equityAdd(formdata).subscribe((data:any)=>{
       this.FileName=data.toString();
       this.FilePath=data.toString();
    })
  }

 }
