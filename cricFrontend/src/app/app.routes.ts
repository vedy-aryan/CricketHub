import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { title } from 'node:process';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"CWC23"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"History | CWC23"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live Matches | CWC23"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"Table | CWC23"
    }
];
