import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
