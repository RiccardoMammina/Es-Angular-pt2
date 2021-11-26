import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() InputDetail!:IUser;
  @Output() closeUserDetail = new EventEmitter<undefined>();
  constructor() { }

  ngOnInit(): void {
  }

}
