import { createSelector } from '@reduxjs/toolkit';

export const selectAllTodos = state => state.todos.todos;
export const selectActiveFilters = state => state.switchFilter;

export const selectTodosByFilter = createSelector(
	[selectAllTodos, selectActiveFilters],
	(allTodos, activeFilters) => {
		console.log({allTodos, activeFilters});
		if (activeFilters === 'all') {
			return allTodos;
		}

		if (activeFilters === 'completed') {
			return allTodos.filter(todo => todo.completed);
		}

		return allTodos.filter(todo => !todo.completed);
	}
)