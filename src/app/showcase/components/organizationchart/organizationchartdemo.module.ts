import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationChartDemo} from './organizationchartdemo';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {OrganizationChartModule} from '../../../components/organizationchart/organizationchart';
import {GrowlModule} from '../../../components/growl/growl';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		OrganizationChartDemoRoutingModule,
        OrganizationChartModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OrganizationChartDemo
	]
})
export class OrganizationChartDemoModule {}
