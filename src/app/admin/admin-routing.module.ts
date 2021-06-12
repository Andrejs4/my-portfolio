import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'admin', component:AdminPageComponent},
    {path: 'messages', component: MessagesPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
