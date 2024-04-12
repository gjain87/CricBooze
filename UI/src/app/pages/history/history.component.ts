import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchcardComponent } from '../../components/matchcard/matchcard.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchcardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit
 {
  allMatch:any;
  constructor(private _api:ApiCallService){}

  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch=data
      },
      error:error=>{
        console.log(error);
      }
    })
  }
 



}
