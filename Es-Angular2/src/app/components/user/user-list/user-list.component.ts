import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/users';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() InputUsers:IUser[] | undefined;
  @Output() userDetail = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }

}
