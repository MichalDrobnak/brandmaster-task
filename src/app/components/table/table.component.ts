import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompaniesDataSource } from './companies.datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  readonly dataSource = new CompaniesDataSource();
  readonly displayedColumns = [
    'customer',
    'default',
    'com_id',
    'leg_id',
    'size',
    'status',
  ];

  sortedColumn: string | null = null;
  sortOrder: 'asc' | 'desc' | null = null;

  constructor() {}

  ngOnInit(): void {}

  sortByColumn(column: string): void {
    if (this.sortedColumn === column) {
      if (this.sortOrder === 'asc') {
        this.sortOrder = 'desc';
      } else if (this.sortOrder === 'desc') {
        this.sortOrder = null;
        this.sortedColumn = null;
      }
    } else {
      this.sortedColumn = column;
      this.sortOrder = 'asc';
    }
  }
}
