import { Link } from "react-router-dom"


const SignupButton = ({ label }) => {
  return (
    <Link to="#" alt={label}>
        {label}
    </Link>
  )
}

export default SignupButton