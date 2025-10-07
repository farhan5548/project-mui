import { Typography, Button, TextField } from '@mui/material'
import './App.css'
function App() {

  return (
    <>
      <Typography variant='h3'
        sx={{
          bgcolor: "red",
          fontWeight: 'bold',
          fontStyle: 'italic',
          textDecoration: 'underline',
          textAlign:'center',
          mb:'2rem',
          py:'2rem'
        }}
      >Ya to Win ha, Ya to Learn ha</Typography>
      <div style={{marginLeft:'2rem', marginRight:'2rem'}}>
        <h1>MUI Tutorial</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quaerat!</p>
        <Button
          variant="contained"
          color='success'
          sx={{ m: '10px' }}
          onClick={() => alert("Button is Clicked By User")}
        >Click Here</Button>

        <Button variant="text"
          disabled
        >Click Here</Button>

        <Button variant="outlined"
          href='https://github.com/farhan5548'
          sx={{ px: '2rem', border: '2px solid black', bgcolor: 'yellow', color: 'black' }}
        >GitHub Profile</Button>

        <br />
        {/* <input type="text" placeholder='Name' /> */}
        <TextField type="text"
          placeholder='Name'
          variant='standard'
          sx={{ m: '30px' }} />

        <TextField type="text"
          placeholder='Name'
          variant='outlined'
          sx={{ m: '30px' }} />

        <TextField type="text"
          placeholder='Name'
          variant='filled'
          sx={{ m: '30px' }} />
      </div>
    </>
  )
}

export default App
