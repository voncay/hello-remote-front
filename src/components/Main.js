import { useState } from 'react'

const Main = () => {

  // 👇️ initial value of empty string (first option)
  const [selected, setSelected] = useState('');

  const handleChangeOnSelected = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value);
  }

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
                    90 jobs for <span className="fw-normal">UK</span>
                  </h3>
                </div>
                <div className="col-sm-auto">
                  <div className="d-sm-flex justify-content-sm-end align-items-center">
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm" value={ selected } onChange={ handleChangeOnSelected }>
                        <option value="Relevance">
                          Relevance
                        </option>
                        <option value="mostRecent">Most recent</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm" value={ selected } onChange={ handleChangeOnSelected }>
                        <option value="alphabeticalOrderSelect1">
                          A-to-Z
                        </option>
                        <option value="alphabeticalOrderSelect2">Z-to-A</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Nav */}
                    <ul className="nav nav-segment">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../demo-jobs/job-grid.html"
                        >
                          <i className="bi-grid-fill" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="../demo-jobs/job-list.html"
                        >
                          <i className="bi-list" />
                        </a>
                      </li>
                    </ul>
                    {/* End Nav */}
                  </div>
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
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/mailchimp-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Mailchimp
                            </a>
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
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Senior B2B sales consultant
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Mailchimp
                                </a>
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
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck1"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $125k-$135k yearly
                            </span>
                            <span className="badge bg-soft-info text-info me-2">
                              <span className="legend-indicator bg-info" />
                              Remote
                            </span>
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
                      <li className="list-inline-item">Oxford</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/capsule-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Capsule
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Office assistant/Social media assistant
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Capsule
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Col */}
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck2"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $50-$135 hourly
                            </span>
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
                      <li className="list-inline-item">Newcastle</li>
                      <li className="list-inline-item">Part time</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/dropbox-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Dropbox
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Marketing and Communications Manager
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Dropbox
                                </a>
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
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck3"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $5k monthly
                            </span>
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
                      <li className="list-inline-item">Posted 1 day ago</li>
                      <li className="list-inline-item">London</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/prosperops-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Prosperops
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Senior backend developer
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Prosperops
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Col */}
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck4"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $75k-$85k yearly
                            </span>
                            <span className="badge bg-soft-info text-info me-2">
                              <span className="legend-indicator bg-info" />
                              Remote
                            </span>
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
                      <li className="list-inline-item">Oxford</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/airbnb-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Airbnb
                            </a>
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
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Senior product manager
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Airbnb
                                </a>
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
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck5"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $76k-$98k yearly
                            </span>
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
                      <li className="list-inline-item">Posted 2 days ago</li>
                      <li className="list-inline-item">London</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="card card-bordered">
                  <div className="card-body">
                    {/* Media */}
                    <div className="d-sm-flex">
                      {/* Media */}
                      <div className="d-flex align-items-center align-items-sm-start mb-3">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-sm avatar-4x3"
                            src="../assets/svg/brands/figma-icon.svg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-sm-none flex-grow-1 ms-3">
                          <h6 className="card-title">
                            <a
                              className="text-dark"
                              href="../demo-jobs/employer.html"
                            >
                              Figma
                            </a>
                          </h6>
                        </div>
                      </div>
                      {/* End Media */}
                      <div className="flex-grow-1 ms-sm-3">
                        <div className="row">
                          <div className="col col-md-8">
                            <h3 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                Administrative Business Partner
                              </a>
                            </h3>
                            <div className="d-none d-sm-inline-block">
                              <h6 className="card-title">
                                <a
                                  className="text-dark"
                                  href="../demo-jobs/employer.html"
                                >
                                  Figma
                                </a>
                              </h6>
                            </div>
                          </div>
                          {/* End Col */}
                          <div className="col-auto order-md-3">
                            {/* Checkbbox Bookmark */}
                            <div className="form-check form-check-bookmark">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="jobsCardBookmarkCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="jobsCardBookmarkCheck6"
                              >
                                <span
                                  className="form-check-bookmark-default"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Save this job"
                                >
                                  <i className="bi-star" />
                                </span>
                                <span
                                  className="form-check-bookmark-active"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Saved"
                                >
                                  <i className="bi-star-fill" />
                                </span>
                              </label>
                            </div>
                            {/* End Checkbbox Bookmark */}
                          </div>
                          {/* End Col */}
                          <div className="col-12 col-md mt-3 mt-md-0">
                            <span className="d-block small text-body mb-1">
                              $50k-$100k yearly
                            </span>
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
                      <li className="list-inline-item">Posted 2 days ago</li>
                      <li className="list-inline-item">Liverpool</li>
                      <li className="list-inline-item">Part time</li>
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

export default Main;
