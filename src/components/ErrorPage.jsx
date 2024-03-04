import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2500)
  }, [])

  return (
    <div>
      <p>Error 404!</p>
    </div>
  )
}

export default ErrorPage
