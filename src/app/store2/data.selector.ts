import { createSelector,createFeatureSelector } from "@ngrx/store";
import { DataState } from "./data.reducer";

export const selectDataState = createFeatureSelector<DataState>('data');

export const selectData = createSelector(
    selectDataState,
    (state: DataState) => state.data
)
export const selectLoading = createSelector(
    selectDataState,
    (state: DataState) => state.loading
)
export const selectError = createSelector(
    selectDataState,
    (state: DataState) => state.error
)
