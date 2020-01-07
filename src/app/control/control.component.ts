import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  updateForm: FormGroup;
  data = [
    {
      url: 'avatar_1.png',
      heading: 'Notice',
      content: 'blah blah blah'
    }];
  selectedAvatar = 0;

  constructor(private fb: FormBuilder, private socket: Socket) {
    this.updateForm = this.fb.group({
      heading: ['', Validators.required],
      content: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.update();
  }

  ngOnInit() {
  }

  add() {
    this.data.push(this.updateForm.value);
    this.updateForm.reset();
    this.selectedAvatar = 0;
    this.update();
  }

  update() {
    this.socket.emit('update',
      this.data, (d) => {
        console.log(d);
      });
  }

  selectAvatar(url, no) {
    this.selectedAvatar = no;
    this.updateForm.get('url').setValue(url);
  }

}
