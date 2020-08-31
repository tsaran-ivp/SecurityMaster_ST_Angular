import { Component, OnInit } from '@angular/core';
import {SharedservicebondsService} from 'src/app/bonds/shared/sharedservicebonds.service';
import {securitybond} from 'src/app/bonds/shared/securitybond.model';
@Component({
  selector: 'app-bondshow',
  templateUrl: './bondshow.component.html',
  styleUrls: ['./bondshow.component.scss']
})
export class BondshowComponent implements OnInit {

  constructor(public service:SharedservicebondsService) { }

  ngOnInit(): void {
    this.service.refreshbondlist();
  }

  populateform(bonditem :securitybond){
    this.service.formdata=Object.assign({},bonditem);

  }
  deleteitem(id:number){
    if(confirm('are u sure u wanna delete?')){
      this.service.bonddelete(id).subscribe(res=>{
        alert("deleted successfully");
        this.service.refreshbondlist();
      })
    }
  }

}
