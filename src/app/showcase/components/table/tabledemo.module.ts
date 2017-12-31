import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableSectionsDemo } from './tablesectionsdemo';
import { TableSubmenu } from './tablesubmenu';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from '../../../components/table/table';
import { SliderModule } from '../../../components/slider/slider';
import { MultiSelectModule } from '../../../components/multiselect/multiselect';
import { GrowlModule } from '../../../components/growl/growl';
import { ButtonModule } from '../../../components/button/button';
import { DropdownModule } from '../../../components/dropdown/dropdown';
import { InputTextModule } from '../../../components/inputtext/inputtext';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
		TableModule,
		SliderModule,
		MultiSelectModule,
		DropdownModule,
		ButtonModule,
		GrowlModule,
		InputTextModule
	],
	declarations: [
		TableSubmenu,
		TableDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableSectionsDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
		TableScrollDemo,
		TableColToggleDemo
	]
})
export class TableDemoModule { }
