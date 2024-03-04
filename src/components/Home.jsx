import { Button, Typography } from '@mui/material'
// import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="home">
        <Typography variant='h3'>Bem vindo!</Typography>
        <div className="homeButtons">
            <Button
              style={{margin:'10px'}}
              variant="contained"
              onClick={() => navigate("signup")}
            >
              Signup
            </Button>
            <Button
              style={{margin:'10px'}}
              variant="contained"
              onClick={() => navigate("login")}
            >
              Login
            </Button>
        </div>
      </div>
    </>
  )
}

export default Home
