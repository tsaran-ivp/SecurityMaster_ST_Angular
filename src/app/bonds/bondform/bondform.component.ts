import { Component, OnInit } from '@angular/core';
import{SharedservicebondsService} from 'src/app/bonds/shared/sharedservicebonds.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bondform',
  templateUrl: './bondform.component.html',
  styleUrls: ['./bondform.component.scss']
})
export class BondformComponent implements OnInit {

  constructor(public service : SharedservicebondsService) { }

  ngOnInit(): void {
  this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formdata=null;
  }

  onSubmit(form:NgForm){
    this.service.bondupdate(form.value).subscribe(res=>{
      alert("updated successfully");
      this.resetForm(form);
      this.service.refreshbondlist();
    })
  }


}
