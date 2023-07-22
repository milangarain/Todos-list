import React , {useState} from 'react';

export default function AddTodoItem(props) {
	const [todoTitle, setTodoTitle] = useState("");
	const [todoDescription, setTodoDescription] = useState("");
	// const handleSubmit = e => 
	// {
	// 	e.preventDefault();
	// 	alert("your todo item "+todoTitle);
	// 	props.AddTodoItem();

	// }
	
	return (
		<div className='container'>
			<form onSubmit={(e) => {
				e.preventDefault();
				
				let todo = {name: todoTitle, desp: todoDescription};
				setTodoTitle("");
				setTodoDescription("");
				return props.onAddTodoItem(todo)} }>
			<label>Todo Item Title: 
				<input 
					type='text'
					value={todoTitle}
					onChange={e => setTodoTitle(e.target.value)}
				/>
			</label>
			<label>Todo Item Description: 
				<input 
					type='text'
					value={todoDescription}
					onChange={e => setTodoDescription(e.target.value)}
				/>
			</label>
			<br/>
			<input type='submit' className='btn btn-primary'/>
			</form>
		</div>
		
	)
}
