import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent,
    SoftwareComponent,
    HardwareComponent,
    TeamComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
