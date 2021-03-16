import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  public parentSubject: Subject<string> = new Subject();
  public currentVideoData: any;
  public isVideStarted = false;

  public dummyData = [
    {
      id: 0,
      url:
        'https://player.vimeo.com/external/404628346.sd.mp4?s=8b8b9c2c5644e5938f4729e896b2a5d83a35a9d3&amp;amp;amp;amp;profile_id=165&amp;amp;amp;amp;oauth2_token_id=57447761',
    },
    {
      id: 1,
      url:
        'https://player.vimeo.com/external/494175214.sd.mp4?s=30a4dca1c0f9a9cefac1c13ce2f9b59eaa779192&amp;amp;amp;amp;profile_id=165&amp;amp;amp;amp;oauth2_token_id=57447761',
    },
    {
      id: 2,
      url:
        'https://player.vimeo.com/external/478717810.sd.mp4?s=7384fd9c7fed325b1bf0287a6f3e98a6d578b95f&amp;amp;amp;amp;profile_id=165&amp;amp;amp;amp;oauth2_token_id=57447761',
    },
  ];

  constructor(private _translate: TranslateService) {}

  ngOnInit() {
    this._translate.setDefaultLang('en');
    this._translate.use('en');
    this.currentVideoData = this.dummyData[0];
  }

  public updateVideoField($event): void {
    if ($event.currentData.id < this.dummyData.length - 1) {
      const x = $event.currentData.id + 1;
      this.currentVideoData = this.dummyData[x];
    } else {
      this.currentVideoData = this.dummyData[0];
    }
  }

  public cardAnimation(value: string): void {
    this.parentSubject.next(value);
  }
}
