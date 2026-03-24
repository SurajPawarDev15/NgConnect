import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Topbar } from './components/topbar/topbar';
import { MatButtonModule } from '@angular/material/button';
import { Login } from './pages/login/login';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [App, Topbar, Login],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
