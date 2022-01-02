import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default function Todos(props) {
    return (
        <div className='container'>
            {props.todoList.length === 0 ? <h3>Nice !! There is No Todo left</h3> :
                <>
                    <h3 className='text-center my-3'>Below are your TodoList: </h3>
                    {props.todoList.map(
                        (todo) => {
                            return <Todo todoItem={todo} key={todo.SNo} onDelete={props.onDelete} />
                        })
                    }
                </>
            }
            {/* <Todo todoItem = {props.todoList[0]}/> */}

        </div>
    )
}

Todos.defaultProps = {
    todoList: [{
        SNo: 1,
        name: "Todo Item Name",
        desp: "Description here."
    }]
}

Todos.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object)
}

// Todos.propTypes = {
//     todoList: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string,
//             desp: PropTypes.string
//       }),
//     )
// }


