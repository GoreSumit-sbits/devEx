import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modaldata',
  templateUrl: './modaldata.component.html',
  styleUrls: ['./modaldata.component.css']
})
export class ModaldataComponent implements OnInit {

  @Output()
  updatedProduct = new EventEmitter<any>();

  @Input()
  productData:{
    id:number|null
    title:string|null
    price:number|null
  }={
    title: null,
    price: null,
    id: null
  }


  updateForm=new FormGroup({
    id:new FormControl(this.productData.id,[Validators.required]),
    title:new FormControl(this.productData.title,[Validators.required]),
    price:new FormControl(this.productData.price,[Validators.required]),
  })

  submitproduct(){
    if(this.updateForm.valid){
      console.log(this.updateForm);
      this.updatedProduct.emit(this.updateForm)

    }
  }

  constructor() { }

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id:new FormControl(this.productData.id,[Validators.required]),
      title:new FormControl(this.productData.title,[Validators.required]),
      price:new FormControl(this.productData.price,[Validators.required]),
    })

    console.log(this.productData,"MODAL DATA INPUT");
    console.log(this.updateForm,"MODAL DATA INPUT");



  }

}
