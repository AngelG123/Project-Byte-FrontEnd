import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url:string = "http://localhost:8080/customer/";
  private httpheader = {headers: new HttpHeaders({'Content-type':'application/json'})};

  constructor(private _http:HttpClient) { }

  getAll():Observable<Customer[]>{
    return this._http.get<Customer[]>(this.url,this.httpheader);
  }

  createCustomer(customer:Customer){
    return this._http.post(this.url,customer,this.httpheader);
  }

  get(id:number):Observable<Customer>{
    return this._http.get<Customer>(this.url+id,this.httpheader);
  }

  update(customer:Customer):Observable<Customer>{
    return this._http.put<Customer>(this.url+customer.customerID,customer,this.httpheader);
  }

  delete(id:number):Observable<Customer>{
    return this._http.delete<Customer>(this.url+id,this.httpheader);
  }

}


