import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ItemsComponent } from './Components/items/items.component';
import { EditAddComponent } from './Components/edit-add/edit-add.component';
import { CardComponent } from './Components/card/card.component';
import { ConfiramtionDeleteComponent } from './Components/confiramtion-delete/confiramtion-delete.component';
import { ConfiramtionDialogCloseComponent } from './Components/confiramtion-dialog-close/confiramtion-dialog-close.component';
import { SharedModuleModule } from '../shared-module/material_module/shared-module.module';
@NgModule({
  declarations: [
    ItemsComponent,
    EditAddComponent,
    CardComponent,
    ConfiramtionDeleteComponent,
    ConfiramtionDialogCloseComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModuleModule
    
  ]
})
export class ProductModule { }
