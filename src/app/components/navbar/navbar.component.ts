import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,UsersComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm:string = "" ;
}
