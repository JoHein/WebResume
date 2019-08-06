import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DegreesComponent } from './degrees/degrees.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'degrees', component: DegreesComponent },



  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: LandingComponent }

];

export const AppRoutingHash = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }
)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
