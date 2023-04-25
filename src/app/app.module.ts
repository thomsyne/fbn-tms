import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule, UtilityModule } from './shared/utility';
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    AlertModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
