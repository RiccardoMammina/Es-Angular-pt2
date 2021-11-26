import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @Input() InputUser!:IUser;
  @Output() userDetail = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

}
