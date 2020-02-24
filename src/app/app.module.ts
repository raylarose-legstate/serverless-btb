import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TopCarouselComponent } from './top-carousel/top-carousel.component';

import { HttpClientModule } from "@angular/common/http";

import { NgxMaskModule } from 'ngx-mask'
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InstructorsComponent } from './instructors/instructors.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TopCarouselComponent,
    HomeComponent,
    ScheduleComponent,
    HeaderComponent,
    ArticlesComponent,
    InstructorsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatCarouselModule.forRoot(),
    MatDatepickerModule,
    NgxMaskModule.forRoot(),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
