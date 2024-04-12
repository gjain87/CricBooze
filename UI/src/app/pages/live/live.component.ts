import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchcardComponent } from "../../components/matchcard/matchcard.component";

@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [CommonModule, MatchcardComponent]
})
export class LiveComponent implements OnInit {
  liveMatches:any
  constructor(private _api:ApiCallService){}


  ngOnInit(): void {
    this.loadLiveMatches();
    

  }




  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches=data
        // setTimeout(()=>{
        //   window.location.reload()
        // },2000)
      },
      error: error => console.log(error)
    });
  }
}
