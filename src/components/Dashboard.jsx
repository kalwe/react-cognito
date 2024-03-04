import { Button } from "@mui/material"
import { useEffect } from "react"
import { redirect } from "react-router-dom"

const Dashboard = () => {
  useEffect(() => {
    const user = { email: "john.doe@domain.com" }
    console.log({ user })
    if (!user) {
      console.log('dashboard redirect to login')
      return redirect('/login')
    }
  })

  const handleLogout = () => {
    console.log('user logout')
  }

  return (
    <div className="dashboard">
      <Button
        style={{ margin: "10px"}}
        variant="contained"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  )
}

export default Dashboard
