import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import * as customersData from 'src/assets/data/table-data.json';

export class CompaniesDataSource {
  data = new BehaviorSubject<Customer[]>(customersData);

  constructor() {}

  connect(): Observable<Customer[]> {
    return this.data;
  }

  disconnect() {}
}
