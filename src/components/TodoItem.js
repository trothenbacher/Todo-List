import React from 'react';

const TodoItem = props => {

    const createTasks = item => {
        return (
            <li key={item.key} onClick={() => props.deleteItem(item.key)}>
                {item.text}
            </li>
        );
    }

    const listItems = props.entries.map(createTasks);
    return <ul className="list">{listItems}</ul>;

}

export default TodoItem;