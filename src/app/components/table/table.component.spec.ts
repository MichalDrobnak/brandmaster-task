import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { SortHeaderComponent } from '../sort-header/sort-header.component';
import { StatusChipComponent } from '../status-chip/status-chip.component';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableModule],
      declarations: [
        TableComponent,
        SortHeaderComponent,
        StatusChipComponent,
        DropdownButtonComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
