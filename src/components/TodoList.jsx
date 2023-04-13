import TodoItem from "./TodoItem"


const TodoList = ({toggleTodoComlete, removeTodo, todos}) => { 

    return (
        <ul>
            {
                todos.map(todo => <TodoItem
                    toggleTodoComlete={toggleTodoComlete}
                    removeTodo={removeTodo}
                    key={todo.id}
                    {...todo} />)
            }
        </ul>
    )

}

export default TodoList