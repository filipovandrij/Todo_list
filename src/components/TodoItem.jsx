import { useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField'
import { deleteTodo, toggleStatus } from '../store/TodoSlice'
import DeleteIcon from '@mui/icons-material/Delete'

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                className="checkbox"
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <TextField
                className="task_text"
                rows={1}
                rowsMax={10}
                sx={{ width: '600px' }}
                type={title}
                defaultValue={title}
            />
            <DeleteIcon
                className="delete"
                onClick={() => dispatch(deleteTodo(id))}
            />
        </li>
    )
}
export default TodoItem
