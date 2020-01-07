import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  list = [];
  constructor(private socket: Socket) {
    socket.on('new-data', (data) => {
      console.log(data);
      this.list = data;
    });
  }

  ngOnInit() {
  }

}
