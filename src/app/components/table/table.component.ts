import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompaniesDataSource } from './companies.datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  dataSource = new CompaniesDataSource();
  displayedColumns = [
    'customer',
    'default',
    'com_id',
    'leg_id',
    'size',
    'status',
  ];

  constructor() {}

  ngOnInit(): void {}
}
