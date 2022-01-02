import React from 'react'
import PropTypes from 'prop-types'

export default function Todo(props) {
    return (
        <div className='todoItem'>
            <h4>{props.todoItem.name}</h4>
            <p>{props.todoItem.desp}</p>
            <button className="btn btn-danger" onClick={() => {return props.onDelete(props.todoItem)} }>Delete</button>
        </div>
    )
}

Todo.propTypes = {
    todoItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desp: PropTypes.string
    })
}

