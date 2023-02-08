import SeekerForm from "./SeekerForm";
import RecruiterForm from "./RecruiterForm";

const Signup = (props) => {

  const user_type = props.user_type

  return (
    <>
      {
        user_type === 'seeker'
        ? <SeekerForm />
        : <RecruiterForm />
      }
    </>
  )
}

export default Signup;
