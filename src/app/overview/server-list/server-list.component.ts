import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IServer } from '../../models/server';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class ServerListComponent {
  @Input() servers: IServer[] = [];
}
