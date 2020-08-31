import { Component, OnInit } from '@angular/core';
import{SharedserviceequityService} from '../shared/sharedserviceequity.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-equityform',
  templateUrl: './equityform.component.html',
  styleUrls: ['./equityform.component.scss']
})

export class EquityformComponent implements OnInit {

  constructor(public service : SharedserviceequityService) { }

  ngOnInit(): void {
  this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formdata=null;
  }

  onSubmit(form:NgForm){
    this.service.equityUpdate(form.value).subscribe(res=>{
      alert("updated successfully");
      this.resetForm(form);
      this.service.refreshequitylist();
    })
  }


}
