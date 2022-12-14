import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import { SideNavTabviewallcaseContent0TaskViewComponent } from './content/0/side-nav-tabviewallcase-content0-task-view.component';
import { SideNavTabviewallcaseContent1CaseViewComponent } from './content/1/side-nav-tabviewallcase-content1-case-view.component';


@Component({
    selector: 'app-tab-view-all-case',
    templateUrl: './tab-view-all-case.component.html',
    styleUrls: ['./tab-view-all-case.component.scss'],
    providers: [
        {   provide: NAE_VIEW_ID_SEGMENT,
            useValue: 'tabViewAllCase'},
        ViewIdService,
    ]
})
export class TabViewAllCaseComponent {

    tabs = [
        {
            label: {
                icon: 'description',
                text: 'HTMLtoPDF',
            },
            canBeClosed: false,
            tabContentComponent: SideNavTabviewallcaseContent1CaseViewComponent,
            order: -1,
            injectedObject: {
                tabViewComponent: SideNavTabviewallcaseContent0TaskViewComponent,
                tabViewOrder: 0
            }
        },
    ];

}
