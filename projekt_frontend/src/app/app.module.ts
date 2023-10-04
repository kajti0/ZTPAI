import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './modules/calendar/add-task/add-task.component';
import { StatsDialogComponent } from './modules/calendar/stats-dialog/stats-dialog.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    AddTaskComponent,
    StatsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
