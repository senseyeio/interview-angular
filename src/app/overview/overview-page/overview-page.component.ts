import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { IServer } from '../../models/server';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  public allServers$: Observable<IServer[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.allServers$ = this.apiService.getAllServers$();
  }

}
