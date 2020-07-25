import React , { useReducer, useState } from "react";
import {initialState, reducer }from "./reducers/reducer";
import TodoList from './components/TodoList'
// import './App.css'
import '../src/components/Todo.css'


const App = () => {

    const [newTodo, setNewTodo] = useState("");
    //this hook controls  the input in the form
    const [state, dispatch] = useReducer(reducer, initialState);
    //this hook controls all state

      const handleChanges = e => {
        setNewTodo(e.target.value)
      }
    //an event listener that changes the default value of newTodo to whatever the user
    //types in the input
    
      const toggleItem = itemId => {
        dispatch({ type: "CHANGE_KEY", payload: itemId })
      };
    
      const clearCompleted = () => {
       dispatch({ type: "CLEAR_COMPLETED" })
      }
    
    return (
        <div>
           <h2>Welcome to your Todo-Reducer App!</h2>
            <div className="form">
                <input 
                className='input'
                type='text'
                value = { newTodo }
                name = 'item'
                onChange = { handleChanges }
                placeHolder = 'Add a Task...'
                />
            <button onClick={() => {
               dispatch({ type: "SET_TODO", payload: newTodo });
              }}> + </button>
            </div>
        <TodoList 
          list = { state } 
          toggleItem = { toggleItem }
        /> 
        <button className="clear-button"
            onClick={ clearCompleted }
            > Clear Completed 
        </button>
        </div>
    );
}

export default App;

