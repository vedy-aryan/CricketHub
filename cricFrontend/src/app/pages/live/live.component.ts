import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchComponentComponent } from '../../components/match-component/match-component.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,MatchComponentComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{


  liveMatches:any

  constructor(private _api:ApiCallService){}

  ngOnInit(): void {
    this.LoadLive();
  }


  private LoadLive() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data
      }
    });
  }
}
