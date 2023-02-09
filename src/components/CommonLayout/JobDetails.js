import { Link } from 'react-router-dom'

const JobDetails = () => {
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Page Header */}
        <div className="container content-space-t-2">
          <div className="w-lg-75 mx-lg-auto">
            <div className="page-header">
              {/* Media */}
              <div className="d-sm-flex mb-3">
                <div className="flex-grow-1 ms-sm-4">
                  <div className="row">
                    <div className="col">
                      <h1 className="page-header-title h2">UX/UI Designer</h1>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <ul className="list-inline list-separator d-flex align-items-center mb-2">
                    <li className="list-inline-item">
                      <Link className="link" to={'/recruiter-profile'}>
                        Capsule
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-inline list-separator small text-body mb-2">
                    <li className="list-inline-item">Posted 7 hours ago</li>
                    <li className="list-inline-item">
                      Germany
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Media */}
            </div>
          </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div className="container content-space-2 content-space-b-lg-3">
          <div className="w-lg-75 mx-lg-auto">
            <div className="row mb-3">
              <div className="col">
                <h3>Description</h3>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
            <p>
              TouchNote is a creative platform that lets people send custom-made
              cards, straight from their phone to those they love anywhere in
              the world. Our easy to use app has helped people nurture their
              most meaningful relationships over 15 million times and was
              awarded the Good Web Guide's App of the Year 2018.
            </p>
            <div className="d-grid mt-7">
              <Link
                className="btn btn-primary btn-transition"
                to={'/apply-job'}
              >
                Apply for this job
              </Link>
            </div>
          </div>
        </div>
        {/* Content */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default JobDetails;
