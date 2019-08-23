import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent},



  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: LandingComponent }

];

export const AppRoutingHash = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules }
)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
