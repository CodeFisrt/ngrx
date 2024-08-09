import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataState } from '../../store2/data.reducer';
import { selectData } from '../../store2/data.selector';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  userList$: Observable<any> | undefined;
  
  constructor(private store: Store<DataState>) { 
    this.userList$ =  this.store.select(selectData);
  }
}
