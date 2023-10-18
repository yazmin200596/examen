import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './Componentes/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    KpiCardComponent,
    DashboardPageComponent,
    SidenavComponent,
  
    
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    // error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase),
     BrowserAnimationsModule,
     MatGridListModule,
     MatCardModule,
     MatMenuModule,
     MatIconModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
