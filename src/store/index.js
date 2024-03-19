import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice'
import { goodsApi } from './goodsApi';

export default configureStore({
	reducer: {
		todos: todoReducer,
		[goodsApi.reducerPath]: goodsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
});