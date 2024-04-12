import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchcardComponent } from '../../components/matchcard/matchcard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-point-table,ngx-typed-js',
  standalone: true,
  imports: [MatchcardComponent,CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {

  pointTable:any;
  tableHeading:any;

  constructor(private _api:ApiCallService){}


  ngOnInit(): void {
    
    this._api.getPointTable().subscribe({
      next:data=>{
        this.pointTable=data
        this.tableHeading=Array.from(this.pointTable[0])
       
        // console.log(this.tableHeading)
      },
      error:error=>{
        console.log(error)
      }

    })
    
  }



}
