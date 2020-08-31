import { Component, OnInit, Input } from '@angular/core';
import{SharedservicebondsService} from 'src/app/bonds/shared/sharedservicebonds.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bondupload',
  templateUrl: './bondupload.component.html',
  styleUrls: ['./bondupload.component.scss']
})
export class BonduploadComponent implements OnInit {

  constructor(public service:SharedservicebondsService) { }
  @Input()
  FileName:string;
  FilePath:string;

  ngOnInit(): void {
  }


  uploadfile(event){
    alert("uploaded succesfully");
    var file=event.target.files[0];
    const formdata :FormData=new FormData();
    formdata.append('uploadedFile',file,file.name);
    this.service.bondadd(formdata).subscribe((data:any)=>{
      this.FileName=data.toString();
      this.FilePath=data.toString();
    })
  }

}

