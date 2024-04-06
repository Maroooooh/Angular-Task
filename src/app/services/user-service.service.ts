import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iusers } from '../models/iusers';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient : HttpClient) { }
  getAllusers(pnumber : number):Observable<any>{
   return  this.httpClient.get<any>(`${environment.baseUrl}/users?page=${pnumber}`)
  }
  getUserById(id:number):Observable<Iusers>{
    return  this.httpClient.get<any>(`${environment.baseUrl}/users/${id}`).pipe(
      map(res => res.data) 
    );
  }
}
