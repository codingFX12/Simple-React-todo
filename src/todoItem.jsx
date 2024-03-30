export function TodoItem({ id,title,completed,toggleChecked, deleteTodo }){
    return (
        <li key={id}>
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => toggleChecked(id, e.target.checked)}
                    />   
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Deleted</button>
        </li>
    )
}