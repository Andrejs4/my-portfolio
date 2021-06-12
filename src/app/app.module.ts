import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioPageComponent,
    AboutMeComponent,
    ContactFormComponent,
    HeaderComponent,
    ProjectsListComponent,
    SkillsListComponent,
    ToolsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
