import { Component, OnInit, enableProdMode } from '@angular/core';
import { Change, CommonService, Customer, Order } from './common.service';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

export interface Products{
  id:number,
  title:string,
  price:number,
  description:string,
  category:[
    id:number,
    name:string,
    image:string
  ],
  images:string[]

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DevEx';

  logEvent(eventName: string) {
    this.events.unshift(eventName);
  }


  productID:number=0;

  editingStart(event:any){
    this.productID=event.data.id
  }

  onSaving(event:any){
    if(event){
      event.cancel = true;
      const data = event.changes[0].data
      this.service.editProduct(this.productID,data).subscribe(i=>{
        console.log(i)
        event.cancel =false
      })
    }
  }
  onDelete(event:any){
    event.cancel=true

        console.log(event);




  }
  clearEvents() {
    this.events = [];
  }

  customers: Customer[];
  products:any
  products1: any;
  events: Array<string> = [];
  editRowKey: number|null = null;
  orders$: Observable<Order[]> | undefined;
  changes: Change<Order>[] = [];


  constructor(private service:CommonService){
    this.customers = service.getCustomers();
  }
  ngOnInit(): void {
     this.products=this.service.getProducts().pipe(map(i=>{
      return i
    }))

    this.service.getProducts().subscribe((data)=>{
      this.products1=data
    })
  }



  hello(){
    alert('hello')
  }



}
