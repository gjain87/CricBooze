import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { homedir } from 'os';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [
{
    path:"home",
    component:LiveComponent,
    title:"Home | CricBooze"

},
{
    path:"history",
    component:HistoryComponent,
    title:"History | CricBooze"
},
{
    path:"point-table",
    component:PointTableComponent,
    title:"Point Table | CricBooze"
},
{
    path:"live",
    component:LiveComponent,
    title:"Live Matches | CricBooze"
},
{
    path:"",
    redirectTo:"/home",
    pathMatch:"full"

},



];
