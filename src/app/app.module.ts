import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';
import { EntitiesComponent } from './entities/entities.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    FooterComponent,
    HeaderComponent,
    GraphComponent,
    EntitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // BrowserAnimationsModule,
    // MatCheckboxModule,
    // MatMenuModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
