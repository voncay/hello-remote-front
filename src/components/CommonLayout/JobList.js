// import { useState } from 'react'
import { Link } from 'react-router-dom'

const JobList = () => {

  // // 👇️ initial value of empty string (first option)
  // const [selected, setSelected] = useState('');

  // const handleChangeOnSelected = event => {
  //   console.log('Label 👉️', event.target.selectedOptions[0].label);
  //   console.log(event.target.value);
  //   setSelected(event.target.value);
  // }

  // console.log(selected, "selected on JobList")

  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Card Grid */}
        <div className="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <h3 className="mb-0">
                    2 jobs for <span className="fw-normal">UK</span>
                  </h3>
                </div>
              </div>
              {/* End Row */}
              {/* Card List */}
              <div className="d-grid gap-5 mb-10">
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <Link
                                className="text-dark"
                                to={'/job-details'}
                              >
                                Senior B2B sales consultant
                              </Link>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <Link
                                  className="text-dark"
                                  to={'/recruiter-profile'}
                                >
                                  Mailchimp
                                </Link>
                                <img
                                  className="avatar avatar-xss ms-1"
                                  src="../assets/svg/illustrations/top-vendor.svg"
                                  alt="Review rating"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Claimed profile"
                                />
                              </h6>
                            </div>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                    </div>
                    {/* End Media */}
                  </div>
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 7 hours ago</li>
                      <li className="list-inline-item">France</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <Link
                                className="text-dark"
                                to={'/job-details'}
                              >
                                Office assistant/Social media assistant
                              </Link>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <Link
                                  className="text-dark"
                                  to={'/recruiter-profile'}
                                >
                                  Capsule
                                </Link>
                              </h6>
                            </div>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                    </div>
                    {/* End Media */}
                  </div>
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 21 hours ago</li>
                      <li className="list-inline-item">Italy</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Card List */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default JobList;
