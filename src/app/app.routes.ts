import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDettailsComponent } from './components/user-dettails/user-dettails.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    },{
        path:'details/:id' ,
        component: UserDettailsComponent
    }
   
];
