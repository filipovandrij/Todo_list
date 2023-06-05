import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

const InputField = ({ text, handleSubmit, handleInput }) => {
    return (
        <Container className="add_form_container" maxWidth="xl">
            <TextField
                className="input_text"
                variant="outlined"
                type={text}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button
                className="add_btn"
                variant="contained"
                onClick={handleSubmit}
            >
                Add Task
            </Button>
        </Container>
    )
}
export default InputField
