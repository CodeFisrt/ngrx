import { createAction, props } from "@ngrx/store";

export const loadData = createAction('[Data] Load');

export const loadDataSuccess =  createAction(
    '[data] load Data Sucess',
    props<{data:any}>()
);

export const loadDataFailure =  createAction(
    '[data] load Data Error',
    props<{error:any}>()
);