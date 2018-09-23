import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ItemsService } from './services/items.service';
import { HomeComponent } from './pages/home/home.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UiModule } from './pages/ui/ui.module';

const appRoutes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'activity/:id', component: ActivityComponent },
  { path: 'activity/:id/:id2', component: ActivityComponent },
  {
    path: 'activities',
    component: ActivityListComponent,
    data: { title: 'Liste des activités' }
  },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ActivityListComponent,
    ActivityComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    UiModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
