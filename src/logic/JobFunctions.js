import axios from "axios"

// export const postjob = (job, recruiter) => {
export const postjob = (job) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/postjob`,
    {
      job_title:          job.title,
      job_description:    job.description,
      job_location:       job.location,
      // posted_by:          recruiter._id,
      // for_company:        recruiter.company
    })
    .then(response => {
      console.log(response.data, "job posted!")
      return response.data
    }).catch((err) => console.log(err))
}

export const editjob = (job) => {
}
