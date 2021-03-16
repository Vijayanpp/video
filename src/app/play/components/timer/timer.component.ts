import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
 public isTimerShowing=true;

  constructor() {}

  ngOnInit() {}

 public handleEvent($event):void {
    if ($event.action === 'done') {
      setTimeout(()=>{this.isTimerShowing=false},1000);
    }
  }
}
