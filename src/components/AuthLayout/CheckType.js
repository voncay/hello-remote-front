import {Navigate, Outlet} from 'react-router-dom'

const CheckType = ({user_type}) => {

  const token = localStorage.sessionUserToken
  const type  = localStorage.sessionUserType

  return (
    <>
      { token && type === user_type ?
        <Outlet />
      :
        <Navigate to='/login' />
      }
    </>
  )
}

export default CheckType
