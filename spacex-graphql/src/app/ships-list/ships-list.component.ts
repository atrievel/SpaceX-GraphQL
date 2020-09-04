import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ships-list',
  templateUrl: './ships-list.component.html',
  styleUrls: ['./ships-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
