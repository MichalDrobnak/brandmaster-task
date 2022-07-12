import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortHeaderComponent implements OnInit {
  @Input() column!: string;
  @Input() sortedColumn!: string | null;
  @Input() sortOrder!: 'asc' | 'desc' | null;

  constructor() {}

  ngOnInit(): void {}

  isVisible(): boolean {
    return this.sortedColumn === this.column;
  }
}
