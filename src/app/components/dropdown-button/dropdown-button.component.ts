import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownButtonComponent implements OnInit {
  readonly itemCount = 3;
  readonly itemKeys = [...Array(this.itemCount).keys()];

  showContent = false;
  selectedKey: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  isSelected(key: number): boolean {
    return key === this.selectedKey;
  }

  selectKey(key: number): void {
    if (this.selectedKey === key) {
      this.selectedKey = null;
    } else {
      this.selectedKey = key;
    }
  }
}
