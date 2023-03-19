import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './customers/customer.service';
import { CustomersComponent } from './customers/customers.component';
import { FormCustomerComponent } from './customers/form-customer.component';

const routes:Routes=[
  {path:'', redirectTo:'/customers', pathMatch:'full'},
  {path:'customers', component:CustomersComponent},
  {path:'customers/form', component:FormCustomerComponent},
  {path:'customers/form/:id', component:FormCustomerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FormCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
