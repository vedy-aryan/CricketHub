import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchComponentComponent } from '../../components/match-component/match-component.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,MatchComponentComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatch:any
constructor (private _api:ApiCallService){

}
  ngOnInit(): void {
   
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch = data
      }
    })
  }



}
