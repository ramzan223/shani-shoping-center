import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotaComponent } from './gota/gota.component';
import { LacComponent } from './lac/lac.component';
import { JenralComponent } from './jenral/jenral.component';
import { MatchingComponent } from './matching/matching.component';
import { LadiesComponent } from './ladies/ladies.component';
import { ShopesComponent } from './shopes/shopes.component';

const routes: Routes = [
   { path: '', redirectTo: '/gota', pathMatch: 'full' },
     { path: 'gota', component: GotaComponent },
     { path: 'lac', component: LacComponent },
     { path: 'jenral', component: JenralComponent },
     { path: 'matching', component: MatchingComponent },
     { path: 'ladies', component: LadiesComponent },
     { path: 'shop', component: ShopesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
