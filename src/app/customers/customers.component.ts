import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  public customer = new Customer();
  public customerError!: Customer;
  public isCreated:boolean = false;
  public title:string = "Lista de Clientes";
  public customers!: Customer[];
  public page!: number;
  

  constructor(private _customerService:CustomerService){}

  ngOnInit(): void {
    this._customerService.getAll().subscribe(
      e => this.customers=e
    )
  }

  deleteCustomer(customer:Customer): void{

    Swal.fire({
      title: 'Eliminar',
      text: "Esta seguro que desea eliminar el cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._customerService.delete(customer.customerID).subscribe(
          res=>this._customerService.getAll().subscribe(
            response=>this.customers=response
          )
        );

        Swal.fire(
          'Eliminado!',
          'El cliente fue eliminado correctamente',
          'success'
        )
      }
    })
  }

}
