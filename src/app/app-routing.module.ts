import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LargermanComponent} from './largerman/largerman.component' ;
import {DogyearsComponent} from './dogyears/dogyears.component' ;
import {NumbersortComponent} from './numbersort/numbersort.component' ;
import {TempconvComponent} from './tempconv/tempconv.component' ;
const routes: Routes = [
  {
    path: 'greaterthan',
    component: LargermanComponent
  },
  {
    path: 'dogyears',
    component: DogyearsComponent
  },
  {
    path: 'sort',
    component: NumbersortComponent
  },
  {
  	path: 'conv',
  	component: TempconvComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
