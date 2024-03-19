import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice'
import SwitchFilter from './SwitchFilterSlice'
import { goodsApi } from './goodsApi';

export default configureStore({
	reducer: {
		todos: todoReducer,
		switchFilter: SwitchFilter,
		[goodsApi.reducerPath]: goodsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
});