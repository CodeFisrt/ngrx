import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';
import { UserComponent } from './user/user.component';
import { provideHttpClient } from '@angular/common/http';
import { dataReducer } from './store2/data.reducer';
import { EffectsModule} from '@ngrx/effects';
import { DataEffects } from './store2/data.effect';
import { EmployeeComponent } from './component/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({data: dataReducer}),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [
    provideHttpClient(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
