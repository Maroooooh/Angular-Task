import { Component, Input, OnInit } from '@angular/core';
import { Iusers } from '../../models/iusers';
import { UserServiceService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardDirective } from '../../directive/card.directive';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,CardDirective],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: Iusers[] = [] as Iusers[];
  user:Iusers = {} as Iusers;
  pages: number[] = [];
  curpage: number = 1;
  loading: boolean = true;
  totalpages: number = 0;
  notfound :boolean = false;
  @Input() recievedsearchterm:string = "";
  constructor(private _userService: UserServiceService , private router : Router) {}

  ngOnInit(): void {
    if (this.recievedsearchterm !== "") {
      this.UserById(+this.recievedsearchterm);
    } else {
      this.UserData();
    }
  }

  UserData(): void {
    this._userService.getAllusers(this.curpage).subscribe({
      next :(data) => {
        this.users = data.data;
        this.totalpages = data.total_pages;
        for(let i = 1; i <= this.totalpages; i++) {
          this.pages[i-1] = i ;
        }
        this.loading = false;
      },
      error: (error) => {
        // console.log(error);
        this.notfound = true ;
        this.loading = true;
      }
    });
  } 
  UserById(id : number): void {
    this._userService.getUserById(id).subscribe({
     next :  (data) => {
      console.log(data);
      this.user = data;
      this.users=[]; 
       this.users.push(this.user);
       this.loading = false;
  
  },
  error: (error) => {
    // console.log(error);
       this.users=[]; 
      this.notfound = true ;
      // this.loading = true;
    // this.loading = true;
  }
    }
);
  }
  ngOnChanges(){
    if (this.recievedsearchterm !== "") {
      this.UserById(+this.recievedsearchterm);
    } else {
      this.UserData();
    }
    // console.log(this.recievedsearchterm); 
    
  }
  
  setpagenumber(x: number) {
    console.log(x);
    this.curpage = x;
    this.UserData();
  }
  goToPreviousPage(): void {
    if (this.curpage > 1) {
      this.curpage--;
      this.UserData();
    }
  }

  goToNextPage(): void {
    if (this.curpage < this.totalpages) {
      this.curpage++;
      this.UserData();
    }
  }
  goTodetails(id:number){
    this.router.navigateByUrl(`/details/${id}`);
  }
}
