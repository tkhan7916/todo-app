import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, main_todos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        main_todos={main_todos} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;