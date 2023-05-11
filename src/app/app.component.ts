import { Component, OnInit, enableProdMode } from '@angular/core';
import { Change, CommonService, Customer, Order } from './common.service';
import {map, mergeMap} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaldataComponent } from './modaldata/modaldata.component';

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
  closeResult!: string;


  // openModal(event:any){

  //   const modalref=this.modalService.open( ModaldataComponent,{ ariaLabelledBy: 'modal-basic-title' })
  //   modalref.componentInstance.productData = event.data;
  //   modalref.componentInstance.updatedProduct
  //   .pipe(mergeMap((data:any) =>this.service.editProduct(data.value)))
  //   .subscribe((i:any)=>{

  //     modalref.close(i)
  //   })

  //   console.log(event, "EDITING START EVENT");



  // }

  updatedProduct:any

  savingStart(event:any){
    console.log(event, "SAVINGSTARTEVENT");
    

  }


  editRow(event:any){
    event.cancel=true
    const id=event.oldData.id
    const data = {title:event.newData.title,price:event.newData.price}
    this.service.editProduct(id,data).subscribe(i=>{
      console.log(i, "LOG AFTER ROWUPDATING");
      event.cancel=false

    })

  }

  deleteRow(event:any){
    const id = event.data.id;
    this.service.deleteProduct(id).subscribe(i=>{
      console.log(i);

    })

  }
  addRow(event:any){
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


  constructor(private service:CommonService,private modalService:NgbModal){
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
