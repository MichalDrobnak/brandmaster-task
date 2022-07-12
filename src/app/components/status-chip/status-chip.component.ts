import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-chip',
  templateUrl: './status-chip.component.html',
  styleUrls: ['./status-chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusChipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
