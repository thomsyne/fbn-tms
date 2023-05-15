import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule, UtilityModule } from './shared/utility';
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from './pages/auth/auth.module';
import { LayoutModule } from './pages/client/layout/layout.module';
import { InterceptorProviders } from './core/interceptors/interceptors';

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
    UtilityModule,
    LayoutModule
  ],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
