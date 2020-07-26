import React, { useEffect } from 'react'

const Input = props => {

    useEffect(() => {
        props.inputElement.current.focus(); // set focus on input field
    });

    return (
        <div className="todoListContainer" >
            <div className="header">
                <form onSubmit={props.addItem}>
                    <input
                        placeholder="Todo"
                        ref={props.inputElement}
                        value={props.currentItem.text}
                        onChange={props.handleInput}
                    />
                    <button type="submit"> Add Todo </button>
                </form>
            </div>
        </div>
    );

};

export default Input;