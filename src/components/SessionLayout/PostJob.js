import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { postjob } from '../../logic/JobFunctions'

const PostJob = () => {

  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobCountry, setJobCountry] = useState('')

  let navigate = useNavigate()

  const createJob = e => {
    e.preventDefault()

    const newJob = {
      job_title:          jobTitle,
      job_description:    jobDescription,
      job_location:       jobCountry
    }

    const postedJob = postjob(newJob).then((res) => {
      // calls the register function from UserFunctions.js and passes newUser as argument
      navigate('/job-details') // then navigates to login
    })

    console.log(postedJob, "Job posted!")

    setJobTitle('')
    setJobDescription('')
    setJobCountry('')
  }

  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Content */}
        {/* <div className="container content-space-2"> */}
          {/* Step Form */}
          <form style={{ paddingTop: '40px' }} onSubmit={ createJob }>
          {/* <form style={{ paddingTop: '40px' }} > */}
            <div className="container-md">
              {/* End Col */}
              <div id="formContainer">
                {/* Content Step Form */}
                <div id="postJobStepFormContent">
                  {/* Card */}
                  <div id="postJobStepBasic" className="card active">
                    {/* Header */}
                    <div
                      className="card-header bg-img-start"
                      style={{
                        backgroundImage:
                          "url(../assets/svg/components/card-1.svg)",
                      }}
                    >
                      <div className="flex-grow-1">
                        <span className="d-lg-none">Step 1 of 7</span>
                        {/* <h3 className="card-header-title">Getting started</h3> */}
                        <p>Hi <b>user{}</b>, please fill the following form to post a job for your company <b>comp{}</b>.</p>
                      </div>
                    </div>
                    {/* End Header */}
                    {/* Body */}
                    <div className="card-body">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="countryLabel" className="form-label">
                          Country
                        </label>
                        {/* Select */}
                        <select
                          id="countryLabel"
                          className="form-select"
                          name="countrySelect"
                        >
                          <option value="FR">France</option>
                          <option value="IT">Italy</option>
                          <option value="UK">England</option>
                          <option value="DE">Germany</option>
                        </select>
                        {/* End Select */}
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="jobTitleLabel" className="form-label">
                          Job title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="jobTitleName"
                          id="jobTitleLabel"
                          placeholder="UI/UX Designer"
                          aria-label="UI/UX Designer"
                        />
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="jobDescriptionLabel" className="form-label">
                          Job description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="jobDescriptionName"
                          id="jobDescriptionLabel"
                          placeholder="Job Description"
                          aria-label="Job Description"
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Body */}
                    {/* Footer */}
                    <div className="card-footer pt-0">
                      <div className="d-flex justify-content-end align-items-center">
                        <Link to={'/'}>
                        <button
                          type="button"
                          className="btn btn-primary"
                        >
                          Save{" "}
                          <i className="bi-chevron-right small ms-1" />
                        </button>
                        </Link>
                      </div>
                    </div>
                    {/* End Footer */}
                  </div>
                  {/* End Card */}
                </div>
                {/* End Content Step Form */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </form>
          {/* End Step Form */}
        {/* </div> */}
        {/* End Content */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  )
}

export default PostJob;
