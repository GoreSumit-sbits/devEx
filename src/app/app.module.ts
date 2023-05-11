import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModaldataComponent } from './modaldata/modaldata.component';
import { DexComponent } from './dex/dex.component';


@NgModule({
  declarations: [
    AppComponent,
    ModaldataComponent,
    DexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
