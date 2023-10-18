import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<!-- To Render Breadcrumb with items. -->
        <ejs-breadcrumb [enableNavigation]="false">
            <e-breadcrumb-items>
                <e-breadcrumb-item iconCss="e-icons e-home" url="http://localhost:4200/login"></e-breadcrumb-item>
                <e-breadcrumb-item text="Components" url="http://localhost:4200/login"></e-breadcrumb-item>
                <e-breadcrumb-item text="Navigations" url="http://localhost:4200/login"></e-breadcrumb-item>
                <e-breadcrumb-item text="Breadcrumb" url=".http://localhost:4200/login"></e-breadcrumb-item>
            </e-breadcrumb-items>
        </ejs-breadcrumb>`,
  styleUrls: ['./app.component.css',  ]
})
export class AppComponent {
  title = 'fireauth-angular-test';
}

 
