import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { incrementCounter } from '../store/counter.action';
import { DataState } from '../store2/data.reducer';
import { loadData } from '../store2/data.action';
import { Observable } from 'rxjs';
import { selectData } from '../store2/data.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userList$: Observable<any> | undefined;

  constructor(private store: Store<DataState>) {
    this.store.dispatch(loadData());
    this.userList$ =  this.store.select(selectData);
  }

  onIncrr() {
    this.store.dispatch(incrementCounter())
  }
}
