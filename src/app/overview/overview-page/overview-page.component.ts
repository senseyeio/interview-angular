import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { IServer } from '../../models/server';
import { ServerListComponent } from '../server-list/server-list.component';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ServerListComponent,
  ],
})
export class OverviewPageComponent implements OnInit {

  public allServers$: Observable<IServer[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.allServers$ = this.apiService.getAllServers$();
  }

}
