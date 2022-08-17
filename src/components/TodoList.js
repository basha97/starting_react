import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(updatedTodos)
    }

    const removeTodo = id => {
        const reomveArr = [...todos].filter(t => t.id !== id);
        setTodos(reomveArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )))
    }

  return (
    <div>
        <h1>What's the plan for Today ?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList