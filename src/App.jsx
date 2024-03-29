import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addNewTodo, fetchTodos} from './store/todoSlice';

import TodoList from './components/TodoList';
import GoodsList from './components/GoodsList';
import InputField from './components/InputField';
import SwitchFilter from './components/SwitchFilter';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const { status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText('');
  }

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchTodos(abortController))
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <SwitchFilter />

      {status === 'loading' && <h2>Loading</h2>}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
      <GoodsList />
    </div>
  );
}

export default App;
