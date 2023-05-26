import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)

    const url =
        'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log('Ошибка:', error)
        })

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList
