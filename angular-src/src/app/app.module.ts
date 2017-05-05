import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule} from "ag-grid-angular/main";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

// components

import { AppComponent } from './app.component';
import { AppBodyComponent } from './components/app-body/app-body.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services

// routes
const appRoutes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
