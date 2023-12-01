import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ItemsComponent } from '../Items/Components/items/items.component';
import { EditAddComponent } from '../Items/Components/edit-add/edit-add.component';
import { CardComponent } from '../Items/Components/card/card.component';
import { UsersComponent } from '../user/components/users/users.component';
import { UserCardComponent } from '../user/components/user-card/user-card.component';
import { UserFromComponent } from '../user/components/user-from/user-from.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
         path:'items',component:ItemsComponent,
         children:[
          {
            path:'add',
            component:EditAddComponent
          },
          {
            path:'edit/:id',component:EditAddComponent
          },
          {  
            path:'card/:id',component:CardComponent
          }
         ]
      },
      {
        path:'users',
        component:UsersComponent,
        children:[
          {
            path:'add',
            component:UserFromComponent
          },
          {
            path:'edit/:id',component:UserFromComponent
          },{
            path:'card/:id',component:UserCardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
