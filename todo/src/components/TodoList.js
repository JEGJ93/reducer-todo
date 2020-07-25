import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="item-list">
            {props.list.map(item => (
                <Todo key={item.id} item={item} 
                toggleItem={ props.toggleItem }
                />
            ))}
        </div>
    )
}

export default TodoList;
