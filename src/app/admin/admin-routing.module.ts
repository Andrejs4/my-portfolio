import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {path: '', component: AuthPageComponent},
    {path: 'admin', component:AdminPageComponent, canActivate: [AuthGuard]},
    {path: 'messages', component: MessagesPageComponent, canActivate: [AuthGuard]},
    {path: '**', component: AuthPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
