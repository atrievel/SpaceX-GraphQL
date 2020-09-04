import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
