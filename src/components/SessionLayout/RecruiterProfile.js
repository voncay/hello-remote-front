const RecruiterProfile = () => {
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Page Header */}
        <div className="container pt-4">
          <div className="page-header">
            {/* Profile Cover */}
            <div className="profile-cover">
              <div className="profile-cover-img-wrapper">
                <img
                  className="profile-cover-img"
                  src="../assets/img/1920x400/img1.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
            {/* End Profile Cover */}
            {/* Media */}
            <div className="d-sm-flex align-items-lg-center pt-1 px-3 pb-3">
              <div className="flex-shrink-0 mb-2 mb-sm-0 me-4">
                <img
                  className="avatar avatar-xl profile-cover-avatar shadow-sm"
                  src="../assets/svg/brands/dropbox-icon.svg"
                  alt="Image Description"
                />
              </div>
              <div className="flex-grow-1">
                <div className="row">
                  <div className="col-md mb-3 mb-md-0">
                    <h1 className="h2 mb-1">
                      Dropbox{" "}
                      <img
                        className="avatar avatar-xs"
                        src="../assets/svg/illustrations/top-vendor.svg"
                        alt="Review rating"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Claimed profile"
                      />
                    </h1>
                  </div>
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End Media */}
          </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div id="about-section" className="container content-space-t-1">
          <h3>About the company</h3>
          <div className="row mb-5">
            <div className="col-md-9">
              <div className="mb-5">
                <p>
                  Capsule was launched in 2009 following the founders'
                  frustration with existing CRM services that were either overly
                  simplistic or far too complex for most businesses. We believe
                  the value of a modern CRM lies in the ability to help
                  businesses stay organized, know more about their customers,
                  build strong relationships and to make the most of sales
                  opportunities, all while minimizing user input. We built
                  Capsule to deliver on these values and today Capsule is used
                  by thousands of businesses of all sizes all over the world.
                </p>
                <div
                  className="collapse"
                  id="employerOverviewDescriptionCollapse"
                >
                  <p>
                    We're based in Manchester, United Kingdom, a city with a
                    creative heart that was founded on science and industry and
                    the birthplace of the modern computer.
                  </p>
                </div>
                <a
                  className="link link-collapse"
                  data-bs-toggle="collapse"
                  href="#employerOverviewDescriptionCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="employerOverviewDescriptionCollapse"
                >
                  <span className="link-collapse-default">Read more</span>
                  <span className="link-collapse-active">Read less</span>
                </a>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Content */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default RecruiterProfile;
