import React from 'react'
import PropTypes from 'prop-types'

// function deleteitem() {

// }
export default function Todo(props) {
    return (
        <div className='todoItem'>

            <h4>{props.todoItem.name}</h4>
            <p>{props.todoItem.desp}</p>
            <button className="btn btn-danger" onClick={() => {return props.onDelete(props.todoItem)} }>Delete</button>

            {/* <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    <button type="button" className="btn btn-danger">Delete</button>

                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div> */}
            {/* <li>My Todo </li> */}
        </div>
    )
}

Todo.propTypes = {
    todoItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desp: PropTypes.string
    })
}

