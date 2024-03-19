import { createSlice } from '@reduxjs/toolkit';

const initialState = 'all';

const SwitchFilter = createSlice({
	'name': 'switchFilter',
	initialState,
	reducers: {
		changeFilter:(_, action) => action.payload,
	}
});

export const { changeFilter } = SwitchFilter.actions;

export default SwitchFilter.reducer;