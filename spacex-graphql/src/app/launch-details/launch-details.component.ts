import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, finalize } from 'rxjs/operators';
import { LaunchDetailsGQL } from '../services/SpacexGraphql.service';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  loading = true;

  faYoutube = faYoutube;
  faNewspaper = faNewspaper;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  launchDetails$ = this.route.paramMap
    .pipe(
      map((params) => params.get('id') as string),
      switchMap((id) => this.launchDetailsService.fetch({ id })),
      map((res) => res.data.launch),
      finalize(() => this.loading = false)
  );

  ngOnInit(): void {
  }

}
