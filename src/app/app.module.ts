import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Student } from './student';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ViewComponent } from './view/view.component';
import { ViewDetailsDirective } from './viewdetails.directive';



const appRoutes: Routes = [
  { path: 'view-students', component: ViewComponent },
  { path: 'add-students', component: StudentdetailsComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailsComponent,
    ViewComponent,
    ViewDetailsDirective,
    
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }