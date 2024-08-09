import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { selectCount, selectCounterState } from './store/counter.selector';
import { decrementCounter, incrementCounter } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   counter$: Observable<number> = new Observable<number>;

   constructor(private store: Store<AppState>){
    this.counter$ = this.store.select(selectCount)
   }

   onIncrement() {
    this.store.dispatch(incrementCounter())
   }

   onDecrement() {
    this.store.dispatch(decrementCounter())
   }
}
