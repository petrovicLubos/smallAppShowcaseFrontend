import {waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavTabviewallcaseContent0TaskViewComponent } from './side-nav-tabviewallcase-content0-task-view.component';
import {
    MaterialModule,
    ConfigurationService,
    AuthenticationMethodService,
    NAE_TAB_DATA,
    SimpleFilter,
    FilterType
} from '@netgrif/components-core';
import {
    HeaderComponentModule,
    PanelComponentModule,
} from '@netgrif/components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

describe('SideNavTabviewallcaseContent0TaskViewComponent', () => {
    let component: SideNavTabviewallcaseContent0TaskViewComponent;
    let fixture: ComponentFixture<SideNavTabviewallcaseContent0TaskViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                HeaderComponentModule,
                PanelComponentModule,
                BrowserAnimationsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {provide: NAE_TAB_DATA, useValue: {baseFilter: new SimpleFilter('id', FilterType.TASK, {}), tabSelected$: new Observable()}},
                AuthenticationMethodService,
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService}
            ],
            declarations: [SideNavTabviewallcaseContent0TaskViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavTabviewallcaseContent0TaskViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
