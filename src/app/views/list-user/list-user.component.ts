import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  userList: User[];

  ngOnInit(): void {
    this.adminService.getAll().subscribe(
      (result) => {
        this.userList = result;
      }, error => {
        alert("Cannot get user list!");
      }
    )
  }

  // ngOnInit() {
  // }
}
