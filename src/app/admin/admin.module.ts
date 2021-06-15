import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AdminAboutMeComponent } from './components/admin-about-me/admin-about-me.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminProjectsListComponent } from './components/admin-projects-list/admin-projects-list.component';
import { AdminSkillsListComponent } from './components/admin-skills-list/admin-skills-list.component';
import { AdminToolsListComponent } from './components/admin-tools-list/admin-tools-list.component';
import { ModalComponent } from './components/form-modal/form-modal.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminPageComponent, 
    AuthPageComponent, 
    MessagesPageComponent, 
    AdminAboutMeComponent, 
    AdminMessagesComponent, 
    AdminProjectsListComponent, 
    AdminSkillsListComponent, 
    AdminToolsListComponent, 
    ModalComponent, 
    HeaderComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
