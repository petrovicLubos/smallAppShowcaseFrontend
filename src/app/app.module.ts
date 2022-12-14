import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationModule, ConfigurationService, MaterialModule, TranslateLibModule, ViewService,} from '@netgrif/components-core';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    AuthenticationComponentModule,
    CaseViewComponentModule,
    HeaderComponentModule,
    ImportNetComponent,
    LoginFormComponentModule,
    NavigationComponentModule,
    NewCaseComponent,
    PanelComponentModule,
    QuickPanelComponentModule,
    RoleAssignmentComponent,
    SearchComponentModule,
    SideMenuComponentModule,
    SideMenuNewCaseComponentModule,
    TabsComponentModule,
    ToolbarComponentModule,
    WorkflowViewComponent,
} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from './template-frontend-configuration.service';
import {TemplateFrontendViewService} from './template-frontend-view.service';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import { SideNavTabviewallcaseContent0TaskViewComponent } from './views/side-nav/tabViewAllCase/content/0/side-nav-tabviewallcase-content0-task-view.component';
import { SideNavTabviewallcaseContent1CaseViewComponent } from './views/side-nav/tabViewAllCase/content/1/side-nav-tabviewallcase-content1-case-view.component';
import { TabViewAllCaseComponent } from './views/side-nav/tabViewAllCase/tab-view-all-case.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SidenavComponent,
        SideNavTabviewallcaseContent0TaskViewComponent,
        SideNavTabviewallcaseContent1CaseViewComponent,
        TabViewAllCaseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FlexModule,
        MaterialModule,
        FlexLayoutModule,
        AuthenticationModule,
        SideMenuComponentModule,
        AuthenticationComponentModule,
        TranslateLibModule,
        LoginFormComponentModule,
        ToolbarComponentModule,
        NavigationComponentModule,
        HeaderComponentModule,
        PanelComponentModule,
        CaseViewComponentModule,
        SearchComponentModule,
        QuickPanelComponentModule,
        TabsComponentModule,
        SideMenuNewCaseComponentModule
    ],
    providers: [
        {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
        {provide: ViewService, useClass: TemplateFrontendViewService}
    ],
    bootstrap: [AppComponent],
    entryComponents: [NewCaseComponent, LoginComponent, SidenavComponent, WorkflowViewComponent, ImportNetComponent, RoleAssignmentComponent]
})
export class AppModule {
}
