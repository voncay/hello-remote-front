import axios from "axios"

export const register = (user) => {
  return axios
    .post("http://localhost:8000/auth/register",
    {
      email:      user.email,
      password:   user.password,
      user_type:  user.user_type
    })
    .then((response) => {
      const registeredUser = response.data

      if (user.user_type === 'recruiter' ) {
        axios.post("http://localhost:8000/api/recruiters",
        {
          user_account:         registeredUser._id,
          first_name:           user.first_name,
          last_name:            user.last_name,
          company_name:         user.company_name,
          company_description:  user.company_description,
          recruiter_type:       user.recruiter_type
        })
        .then(response => {
          console.log(response.data, "recruiter profile created")
        }).catch((err) => console.log(err))

      } else {
        axios.post("http://localhost:8000/api/seekers",
        {
          user_account:       registeredUser._id,
          first_name:         user.first_name,
          last_name:          user.last_name,
          current_salary:     user.current_salary,
          education_detail:   user.education_detail,
          experience_detail:  user.experience_detail,
          skill_set:          user.skill_set
        })
        .then(response => {
          console.log(response.data, "seeker profile created")
        }).catch((err) => console.log(err))
      }

    })
    .catch((err) => console.log(err))
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
      localStorage.setItem("usertoken", res.data) // sets a usertoken into the localstorage coming from res.data
      return res.data
    })
    .catch((err) => console.error(err))
}
