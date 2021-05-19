import { Component, Input } from '@angular/core';
import { IServer } from '../../models/server';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.less']
})
export class ServerListComponent {
  @Input() servers: IServer[] = [];
}
