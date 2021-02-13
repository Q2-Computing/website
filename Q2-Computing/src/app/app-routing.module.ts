import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'vision', component: VisionComponent },
	{ path: 'software', component: SoftwareComponent },
	{ path: 'hardware', component: HardwareComponent },
	{ path: 'team', component: TeamComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
