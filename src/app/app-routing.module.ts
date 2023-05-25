import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BraniComponent } from './brani/brani.component';
import { ArtistiComponent } from './artisti/artisti.component';

const routes: Routes = [
  { path: 'brani', component: BraniComponent },
  { path: 'artisti', component: ArtistiComponent },
  { path: '', redirectTo: '/brani', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
