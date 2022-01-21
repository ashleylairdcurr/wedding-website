import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistryComponent } from './registry/registry.component';
import { HttpClientModule } from  '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpComponent,
    GalleryComponent,
    RegistryComponent,
    AdminComponent,
    NavigationComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
