import { TodoItem } from "./todoItem"

export function TodoList({ todos, toggleChecked, deleteTodo }){
    return (
        <ul className="list">
            {todos.length === 0 && "No ToDo" }
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} toggleChecked={toggleChecked} deleteTodo={deleteTodo}/>

                )
            })}
        </ul>
    )
}