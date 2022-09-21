import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService, LoggerService, ViewService} from '@netgrif/components-core';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {RoleAssignmentComponent, WorkflowViewComponent} from '@netgrif/components';
import { TabViewAllCaseComponent } from './views/side-nav/tabViewAllCase/tab-view-all-case.component';


@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendViewService extends ViewService {
    constructor(configurationService: ConfigurationService, router: Router, loggerService: LoggerService) {
        // This class is managed by schematics. Avoid modifying it by hand.
        // If you want to add views to the application run the 'create-view' schematic.
        super([{id: 'TabViewAllCaseComponent', class: TabViewAllCaseComponent},
			{id: 'RoleAssignmentComponent', class: RoleAssignmentComponent},
            {id: 'WorkflowViewComponent', class: WorkflowViewComponent},
            {id: 'SidenavComponent', class: SidenavComponent},
            {id: 'LoginComponent', class: LoginComponent}

        ], configurationService, router, loggerService);
    }
}
