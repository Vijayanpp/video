import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
    ]),
  ],
})
export class VideoCardComponent implements OnInit {
  @Input() parentSubject: Subject<any>;
  @Input() currentVideoData: any;
  @Output() animationCompleted = new EventEmitter<any>();
  @Output() videoCompleted=new EventEmitter<any>()
  public animationState: string;
  public progressingValue = 0;
  public showCountDown = false;

  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    this._init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentVideoData) {
      const player = this._elRef.nativeElement.querySelector('video');
      player.load();
    }
  }

  private _init() {
    this._initAnimation();
    this._showVideoProgress();
    this._overRideTheShadowDomStyleForProgressingbar();
  }

  private _initAnimation(): void {
    this.parentSubject.subscribe((event) => {
      this.startAnimation(event);
    });
  }

  public startAnimation(state: string): void {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  public resetAnimationState(state): void {
    if (!!this.animationState) {
      this.animationCompleted.emit({
        animationType: this.animationState,
        currentData: this.currentVideoData,
      });
      this.animationState = '';
    }
  }

  private _showVideoProgress(): void {
    const vid: any = document.getElementById('appVideo');
    const that = this;
    vid.ontimeupdate = (value) => {
      const currentTime = vid.currentTime / vid.duration;
      const remainingTime = vid.duration - vid.currentTime;
      !isNaN(currentTime) && (that.progressingValue = currentTime);
      if (remainingTime <= 5) {
        this.showCountDown = true;
      }
      remainingTime === 0 &&
        setTimeout(() => {
          this.showCountDown = false;
          this.videoCompleted.emit({
            animationType: this.animationState,
            currentData: this.currentVideoData,
          });
        }, 2000);
    };
  }

  private _overRideTheShadowDomStyleForProgressingbar(): void {
    let element: HTMLElement = document.querySelector('ion-progress-bar');
    var style = document.createElement('style');
    style.innerHTML =
      '.progress-buffer-bar { background: transparent!important; z-index: 1; }';
    element.shadowRoot.appendChild(style);
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
