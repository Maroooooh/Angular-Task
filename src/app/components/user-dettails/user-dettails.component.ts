import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from '../../models/iusers';
import { CardDirective } from '../../directive/card.directive';

@Component({
  selector: 'app-user-dettails',
  standalone: true,
  imports: [CardDirective],
  templateUrl: './user-dettails.component.html',
  styleUrl: './user-dettails.component.css'
})
export class UserDettailsComponent implements OnInit {
  userid :number = 0;
  user : Iusers = {} as Iusers;
  constructor(private _userService: UserServiceService ,private activeroute : ActivatedRoute,
    private router : Router
  ){

  }
  ngOnInit(): void {
    this.userid =Number(this.activeroute.snapshot.paramMap.get('id'));
    this.UserById(this.userid) ;
  }
  UserById(id : number): void {
    this._userService.getUserById(id).subscribe(data => {
      console.log(data);
      this.user = data;
  });
  }
  goBack(){
    this.router.navigateByUrl(`/`);
  }
}
