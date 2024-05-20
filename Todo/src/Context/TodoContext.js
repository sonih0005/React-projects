import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}

});

export  const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider