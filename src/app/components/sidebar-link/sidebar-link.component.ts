import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLinkComponent implements OnInit {
  @Input() icon?: string;
  @Input() active?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
