import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MyServiceService {
  private goals = new BehaviorSubject<any>(['I wanna go sky diving', 'I want to climb a mountain', 'Go ice skating']);
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal(goal) {
    this.goals.next(goal)
  }

}
