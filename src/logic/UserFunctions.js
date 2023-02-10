import axios from "axios"

export const register = async (user) => {

  console.log(user, "user form register function")

  const savedUser = await axios
    // .post(`${process.env.API_URL_PORT}/api/register`,
    .post(`http://localhost:8000/auth/register`,
    {
      email:      user.email,
      password:   user.password,
      user_type:  user.user_type
    })
    .then(response => {
      console.log(response.data, "user created!")
      return response.data
    }).catch((err) => console.log(err))

  if (user.user_type === 'recruiter' ) {
    // const savedCompany = await axios
    //   // .post(`${process.env.API_URL_PORT}/api/companies`,
    //   .post(`http://localhost:8000/api/companies`,
    //   {
    //     company_name:         user.company_name,
    //     company_description:  user.company_description
    //   })
    //   .then(response => {
    //     console.log(response.data, "company created!")
    //     return response.data
    //   }).catch((err) => console.log(err))

    return await axios
      // .post(`${process.env.API_URL_PORT}/api/recruiters`,
      .post(`http://localhost:8000/api/recruiters`,
      {
        user_account:         savedUser._id,
        first_name:           user.first_name,
        last_name:            user.last_name,
        recruiter_type:       user.recruiter_type,
        company_name:         user.company_name,
        company_description:  user.company_description
        // related_company:      savedCompany._id
      })
      .then(response => {
        console.log(response.data, "recruiter profile created")
        return response.data
      }).catch((err) => console.log(err))
  } else {
    return await axios
      // .post(`${process.env.API_URL_PORT}/api/seekers`,
      .post(`http://localhost:8000/api/seekers`,
      {
        user_account:       savedUser._id,
        first_name:         user.first_name,
        last_name:          user.last_name,
        // education_detail:   user.education_detail,
        // experience_detail:  user.experience_detail,
        // skill_set:          user.skill_set
      })
      .then(response => {
        console.log(response.data, "seeker profile created")
        return response.data
      }).catch((err) => console.log(err))
  }
}


export const edituser = (user) => {
}


export const deleteuser = (user) => {
}


export const login = (user) => {
  return axios
    .post("http://localhost:8000/auth/login",
    {
      email: user.email,
      password: user.password
    })
    .then((res) => {
      // console.log(res.headers.get('auth-token'))
      localStorage.setItem("userToken", res.data.token) // sets a usertoken into the localstorage coming from res.data
      return res.data
    })
    .catch((err) => console.error(err))
}


export const logout = (user) => {
}
