import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddButtonComponent } from '../add-button/add-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { SortHeaderComponent } from '../sort-header/sort-header.component';
import { StatusChipComponent } from '../status-chip/status-chip.component';
import { TableComponent } from '../table/table.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableModule],
      declarations: [
        MainComponent,
        TableComponent,
        SearchbarComponent,
        AddButtonComponent,
        StatusChipComponent,
        SortHeaderComponent,
        DropdownButtonComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
