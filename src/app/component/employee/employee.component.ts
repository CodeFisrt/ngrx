import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { DataState } from '../../store2/data.reducer';
import { selectData } from '../../store2/data.selector';
import { loadData } from '../../store2/data.action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  userList$: Observable<any> | undefined;
  
  constructor(private store: Store<DataState>) { 
    this.userList$ =  this.store.select(selectData);
    this.userList$ = this.store.select(selectData).pipe(
      tap((hasData) => {
        if (!hasData) {
          // If no data is present, dispatch the loadData action
          this.store.dispatch(loadData());
        }
      })
    );
  }
}
