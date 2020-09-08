import { Component, OnInit } from '@angular/core';
import { PastLaunchListGQL } from '../services/SpacexGraphql.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-past-launch-list',
  templateUrl: './past-launch-list.component.html',
  styleUrls: ['./past-launch-list.component.scss']
})
export class PastLaunchListComponent implements OnInit {

  logoPath = '../../assets/SpaceX-Logo.png';
  loading = true;

  constructor(private readonly pastLaunchesService: PastLaunchListGQL) {}

  pastLaunches$ = this.pastLaunchesService
    .fetch({ offset: 0, limit: 30 })
    .pipe(
      map((res) => res.data.launchesPast),
      finalize(() => this.loading = false)
    );

  ngOnInit(): void {
  }

}
