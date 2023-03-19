import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit{

  public customer = new Customer();
  public customerError!: Customer;

  constructor(private _customerService:CustomerService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.obtainCustomer();
  }

  obtainCustomer():void {
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this._customerService.get(id).subscribe(
            es=>this.customer=es
          );
        }
      }
    );
  }

  createCustomer(){
    this._customerService.createCustomer(this.customer).subscribe(

      data=>{
        
        this.customerError = new Customer();

        Swal.fire({
          title: 'Exito!',
          text: 'Se creo el cliente correctamente',
          icon: 'success'
        }).then((result) => {
          
          this.router.navigate(['/customers']);
          
        })

      },
      error=>{
        
        this.customerError=error.error;
        
      }
    );
  }

  updateCustomer(){
    this._customerService.update(this.customer).subscribe(
      data=>{
        
        
        this.customerError = new Customer();

        Swal.fire({
          title: 'Exito!',
          text: 'Se actualizo el cliente correctamente',
          icon: 'success'
        }).then((result) => {
          
          this.router.navigate(['/customers']);
          
        })

      },
      error=>{

        this.customerError=error.error;
        
      }
    );
  }

}
