import React, { useState } from 'react';

import TodoItem from './TodoItem';
import Input from './Input';

const TodoList = () => {

    const inputElement = React.createRef();
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

    const deleteItem = key => {
        const filteredItems = items.filter(item => {
            return item.key !== key;
        });

        setItems(filteredItems);
    };

    const addItem = element => {
        element.preventDefault(); // prevents reload
        const newItem = currentItem;

        if (newItem.text !== '') {
            setItems([...items, newItem]);
            setCurrentItem({ text: '', key: '' });
        }
    };

    const handleInput = element => {
        const itemText = element.target.value;
        setCurrentItem({ text: itemText, key: Date.now() });
    };

    return (
        <div className='App'>
            <Input
                addItem={addItem}
                inputElement={inputElement}
                handleInput={handleInput}
                currentItem={currentItem}
            />
            <TodoItem
                entries={items}
                deleteItem={deleteItem}
            />
        </div>
    );

};

export default TodoList;