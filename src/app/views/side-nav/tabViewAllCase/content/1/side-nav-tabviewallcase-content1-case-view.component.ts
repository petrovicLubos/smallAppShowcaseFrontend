import {AfterViewInit, Component, Inject, Optional, ViewChild} from '@angular/core';
import {
    AllowedNetsService,
    AllowedNetsServiceFactory,
    CaseViewService,
    CategoryFactory,
    defaultCaseSearchCategoriesFactory,
    InjectedTabbedCaseViewData,
    LoggerService,
    NAE_BASE_FILTER,
    NAE_SEARCH_CATEGORIES,
    NAE_TAB_DATA,
    SearchService,
    SimpleFilter,
    AbstractTabbedCaseViewComponent,
    ViewIdService,
    OverflowService
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
    return factory.createFromArray(["html2pdf"])
};

const baseFilterFactory = () => {
    return {
        filter: SimpleFilter.fromCaseQuery({process: [{ identifier: 'html2pdf' }]} )
    };
};

@Component({
    selector: 'app-side-nav-tabviewallcase-content1-case-view',
    templateUrl: './side-nav-tabviewallcase-content1-case-view.component.html',
    styleUrls: ['./side-nav-tabviewallcase-content1-case-view.component.scss'],
    providers: [
        CategoryFactory,
        CaseViewService,
        SearchService,
        OverflowService,
        {   provide: NAE_BASE_FILTER,
            useFactory: baseFilterFactory},
        {   provide: AllowedNetsService,
            useFactory: localAllowedNetsFactory,
            deps: [AllowedNetsServiceFactory]},
        ViewIdService,
        {provide: NAE_SEARCH_CATEGORIES, useFactory: defaultCaseSearchCategoriesFactory, deps: [CategoryFactory]},
    ]
})
export class SideNavTabviewallcaseContent1CaseViewComponent extends AbstractTabbedCaseViewComponent implements AfterViewInit {

    @ViewChild('header') public caseHeaderComponent: HeaderComponent;

    constructor(caseViewService: CaseViewService,
                loggerService: LoggerService,
                @Optional() overflowService: OverflowService,
                @Inject(NAE_TAB_DATA) injectedTabData: InjectedTabbedCaseViewData) {
        super(caseViewService, loggerService, injectedTabData, overflowService, undefined, undefined, {
            enableCaseTitle: false,
            isCaseTitleRequired: false
        });
    }

    ngAfterViewInit(): void {
        super.initializeHeader(this.caseHeaderComponent);
    }

}
