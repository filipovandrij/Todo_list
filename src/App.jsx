import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, fetchTodos } from './store/TodoSlice'
import './App.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'

import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
    const [text, setText] = useState('')
    const { status, error } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addNewTodo(text))
        setText('')
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <div className="App">
                <InputField
                    text={text}
                    handleSubmit={addTask}
                    handleInput={setText}
                />

                {status === 'loading' && <h2>Loading...</h2>}
                {error && <h2>An error occured: {error}</h2>}
                <TodoList />
            </div>
        </StyledEngineProvider>
    )
}

export default App
