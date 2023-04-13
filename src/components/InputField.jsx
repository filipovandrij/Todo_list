const InputField = ({text, handleSubmit, handleInput}) => {
  return (
    <label htmlFor="">
        <input type={text} onChange={(e) => handleInput(e.target.value)} />
        <button onClick={handleSubmit}>Add Todo</button>
      </label>
  )
}
export default InputField

