import { Routes } from '@angular/router';
import { IndexPageComponent } from './main/pages/index-page/index-page.component';
import { SettingsPageComponent } from './main/pages/settings-page/settings-page.component';

export const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];
