import { Typography, Button } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <Typography variant='h2' sx={{ color: "red" }}>Sample Text</Typography>
      <div>
        <h1>MUI Tutorial</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quaerat!</p>
        <Button variant="contaned" sx={{color:"success"}}>Click Here</Button>
        <Button variant="text">Click Here</Button>
        <Button variant="outlined">Click Here</Button>
      </div>
    </>
  )
}

export default App
