import { Component, OnInit } from '@angular/core';
import { FutureLaunchListGQL } from '../services/SpacexGraphql.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-future-launch-list',
  templateUrl: './future-launch-list.component.html',
  styleUrls: ['./future-launch-list.component.scss']
})
export class FutureLaunchListComponent implements OnInit {

  today = new Date().toISOString();
  loading = true;
  logoPath = '../../assets/SpaceX-Logo.png';

  constructor(private readonly pastLaunchesService: FutureLaunchListGQL) {}

  futureLaunches$ = this.pastLaunchesService
    .fetch({ offset: 0, limit: 30 })
    .pipe(
      map((res) => res.data.launchesUpcoming),
      finalize(() => this.loading = false)
    );

  ngOnInit(): void {
  }

}
