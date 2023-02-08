const Test = () => {
  return (
    <>
      {/* Required Meta Tags Always Come First */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Title */}
      <title>Jobs: Listing | Front - Multipurpose Responsive Template</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="../favicon.ico" />
      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      {/* CSS Implementing Plugins */}
      <link
        rel="stylesheet"
        href="../assets/vendor/bootstrap-icons/font/bootstrap-icons.css"
      />
      <link
        rel="stylesheet"
        href="../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"
      />
      <link
        rel="stylesheet"
        href="../assets/vendor/nouislider/dist/nouislider.min.css"
      />
      {/* CSS Front Template */}
      <link rel="stylesheet" href="../assets/css/theme.min.css" />
      {/* ========== HEADER ========== */}
      <header
        id="header"
        className="navbar navbar-expand-lg navbar-end navbar-light"
      >
        {/* Topbar */}
        <div className="container navbar-topbar">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Toggler */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#topbarNavDropdown"
              aria-controls="topbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="d-flex justify-content-between align-items-center">
                <span className="navbar-toggler-text">Topbar</span>
                <span className="navbar-toggler-default">
                  <i className="bi-chevron-down ms-2" />
                </span>
                <span className="navbar-toggler-toggled">
                  <i className="bi-chevron-up ms-2" />
                </span>
              </span>
            </button>
            {/* End Toggler */}
            <div
              id="topbarNavDropdown"
              className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse"
            >
              <div className="navbar-toggler-wrapper">
                <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
                  <span className="navbar-toggler-text small">Topbar</span>
                  {/* Toggler */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#topbarNavDropdown"
                    aria-controls="topbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="bi-x" />
                  </button>
                  {/* End Toggler */}
                </div>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item me-auto">
                  <a
                    className="nav-link"
                    href="../landing-classic-corporate.html"
                  >
                    <i className="bi-chevron-left small ms-1" /> Main demo
                  </a>
                </li>
                {/* Demos */}
                <li className="hs-has-mega-menu nav-item">
                  <a
                    id="demosMegaMenu"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                    aria-current="page"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Demos
                  </a>
                  {/* Mega Menu */}
                  <div
                    className="hs-mega-menu dropdown-menu w-100"
                    aria-labelledby="demosMegaMenu"
                    style={{ minWidth: "40rem" }}
                  >
                    {/* Promo */}
                    <div className="navbar-dropdown-menu-promo">
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../landing-classic-corporate.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Main
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Over 60 corporate, agency, portfolio, account
                                and many more pages.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../demo-real-estate/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.5 3C5.67157 3 5 3.67157 5 4.5V6H3.5C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9H5V19.5C5 20.3284 5.67157 21 6.5 21C7.32843 21 8 20.3284 8 19.5V9H20.5C21.3284 9 22 8.32843 22 7.5C22 6.67157 21.3284 6 20.5 6H8V4.5C8 3.67157 7.32843 3 6.5 3Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.5 11H10V17.5C10 18.3284 10.6716 19 11.5 19H15.5C17.3546 19 19.0277 18.2233 20.2119 16.9775C20.1436 16.9922 20.0727 17 20 17C19.4477 17 19 16.5523 19 16V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V15.9657C21.6334 14.9626 22 13.7741 22 12.5C22 11.6716 21.3284 11 20.5 11Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Real Estate
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Find the latest homes for sale, real estate
                                market data.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link active"
                          href="../demo-jobs/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Jobs{" "}
                                <span className="badge bg-success rounded-pill ms-1">
                                  Hot
                                </span>
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Search millions of jobs online to find the next
                                step in your career.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                    </div>
                    {/* End Promo */}
                    {/* Promo */}
                    <div className="navbar-dropdown-menu-promo">
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../demo-course/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                    fill="#035A4B"
                                  />
                                  <mask
                                    id="mask0"
                                    mask-type="alpha"
                                    maskUnits="userSpaceOnUse"
                                    x={8}
                                    y={6}
                                    width={8}
                                    height={10}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                      fill="white"
                                    />
                                  </mask>
                                  <g mask="url(#mask0)"></g>
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Course{" "}
                                <span className="badge bg-success rounded-pill ms-1">
                                  Hot
                                </span>
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Learn on your schedule. An online learning and
                                teaching demo.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../demo-shop/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M20 22H4C3.4 22 3 21.6 3 21V2H21V21C21 21.6 20.6 22 20 22Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    d="M12 14C9.2 14 7 11.8 7 9V5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5V9C9 10.7 10.3 12 12 12C13.7 12 15 10.7 15 9V5C15 4.4 15.4 4 16 4C16.6 4 17 4.4 17 5V9C17 11.8 14.8 14 12 14Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                E-Commerce
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Choose an online store &amp; get your business
                                online today!
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../demo-app-marketplace/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M18 10V20C18 20.6 18.4 21 19 21C19.6 21 20 20.6 20 20V10H18Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M11 10V17H6V10H4V20C4 20.6 4.4 21 5 21H12C12.6 21 13 20.6 13 20V10H11Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10H10Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10H18Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M14 4H10V10H14V4Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M17 4H20L22 10H18L17 4Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M7 4H4L2 10H6L7 4Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    d="M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10H6ZM10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10H10ZM18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10H18ZM19 2H5C4.4 2 4 2.4 4 3V4H20V3C20 2.4 19.6 2 19 2ZM12 17C12 16.4 11.6 16 11 16H6C5.4 16 5 16.4 5 17C5 17.6 5.4 18 6 18H11C11.6 18 12 17.6 12 17Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                App Marketplace
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Find apps and integrates seamlessly with popular
                                apps.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                    </div>
                    {/* End Promo */}
                    {/* Promo */}
                    <div className="navbar-dropdown-menu-promo">
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link "
                          href="../demo-help-desk/index.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                Help Desk
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                A customer service demo that helps you balance
                                customer needs.
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item">
                        {/* Promo Link */}
                        <a
                          className="navbar-dropdown-menu-promo-link"
                          href="https://htmlstream.com/contact-us"
                          target="_blank"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <span className="svg-icon svg-icon-sm text-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 17C16.4183 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 7.58172 17 12 17Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.53819 9L10.568 19.3624L11.976 18.8149L13.3745 19.3674L17.4703 9H6.53819ZM9.46188 11H14.5298L11.9759 17.4645L9.46188 11Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M10 22H14V22C14 23.1046 13.1046 24 12 24V24C10.8954 24 10 23.1046 10 22V22Z"
                                    fill="#035A4B"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C8.44772 18 8 17.5523 8 17Z"
                                    fill="#035A4B"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <span className="navbar-dropdown-menu-media-title">
                                New demo ideas?
                              </span>
                              <p className="navbar-dropdown-menu-media-desc">
                                Send us your suggestions{" "}
                                <i className="bi-box-arrow-up-right ms-1" />
                              </p>
                            </div>
                          </div>
                        </a>
                        {/* End Promo Link */}
                      </div>
                      {/* End Promo Item */}
                      {/* Promo Item */}
                      <div className="navbar-dropdown-menu-promo-item"></div>
                      {/* End Promo Item */}
                    </div>
                    {/* End Promo */}
                  </div>
                  {/* End Mega Menu */}
                </li>
                {/* End Demos */}
                {/* Docs */}
                <li
                  className="hs-has-mega-menu nav-item"
                  data-hs-mega-menu-item-options='{
                    "desktop": {
                      "maxWidth": "20rem"
                    }
                  }'
                >
                  <a
                    id="docsMegaMenu"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  {/* Mega Menu */}
                  <div
                    className="hs-mega-menu hs-position-right dropdown-menu"
                    aria-labelledby="docsMegaMenu"
                    style={{ minWidth: "20rem" }}
                  >
                    {/* Link */}
                    <a
                      className="navbar-dropdown-menu-media-link"
                      href="../documentation/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                                fill="#035A4B"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Documentation{" "}
                            <span className="badge bg-primary rounded-pill ms-1">
                              v4.3.1
                            </span>
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Development guides for building projects with Space
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Link */}
                    <div className="dropdown-divider" />
                    {/* Link */}
                    <a
                      className="navbar-dropdown-menu-media-link"
                      href="../snippets/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M21 2H13C12.4 2 12 2.4 12 3V13C12 13.6 12.4 14 13 14H21C21.6 14 22 13.6 22 13V3C22 2.4 21.6 2 21 2ZM15.7 8L14 10.1V5.80005L15.7 8ZM15.1 4H18.9L17 6.40002L15.1 4ZM17 9.59998L18.9 12H15.1L17 9.59998ZM18.3 8L20 5.90002V10.2L18.3 8ZM9 2H3C2.4 2 2 2.4 2 3V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V3C10 2.4 9.6 2 9 2ZM4.89999 12L4 14.8V9.09998L4.89999 12ZM4.39999 4H7.60001L6 8.80005L4.39999 4ZM6 15.2L7.60001 20H4.39999L6 15.2ZM7.10001 12L8 9.19995V14.9L7.10001 12Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M21 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H21C21.6 16 22 16.4 22 17C22 17.6 21.6 18 21 18ZM19 21C19 20.4 18.6 20 18 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H18C18.6 22 19 21.6 19 21Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Snippets
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Move quickly with copy-to-clipboard feature
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Link */}
                  </div>
                  {/* End Mega Menu */}
                </li>
                {/* End Docs */}
              </ul>
            </div>
          </nav>
        </div>
        {/* End Topbar */}
        <div className="container">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Default Logo */}
            <a
              className="navbar-brand"
              href="../demo-jobs/index.html"
              aria-label="Front"
            >
              <img
                className="navbar-brand-logo"
                src="../assets/svg/logos/logo.svg"
                alt="Logo"
              />
            </a>
            {/* End Default Logo */}
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-default">
                <i className="bi-list" />
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-x" />
              </span>
            </button>
            {/* End Toggler */}
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="../demo-jobs/index.html">
                    Home
                  </a>
                </li>
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="listingsDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Listings
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item active"
                      href="../demo-jobs/job-list.html"
                    >
                      Listing
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-grid.html"
                    >
                      Listing (Grid)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="pagesDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-overview.html"
                    >
                      Job Overview
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/apply-for-job.html"
                    >
                      Apply for Job
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employee.html"
                    >
                      Employee (Applicant)
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employer.html"
                    >
                      Employer (Company)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="../demo-jobs/upload-resume.html"
                  >
                    Upload resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-primary btn-transition"
                    href="../demo-jobs/post-job.html"
                  >
                    Post a job
                  </a>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Hero */}
        <div className="gradient-x-three-sm-primary">
          <div className="container content-space-2">
            <form>
              {/* Input Card */}
              <div className="input-card input-card-sm mb-3">
                <div className="input-card-form">
                  <label
                    htmlFor="jobTitleForm"
                    className="form-label visually-hidden"
                  >
                    Job, title, skills, or company
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-prepend input-group-text">
                      <i className="bi-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitleForm"
                      placeholder="Job, title, skills, or company"
                      aria-label="Job, title, skills, or company"
                    />
                  </div>
                </div>
                <div className="input-card-form">
                  <label
                    htmlFor="cityForm"
                    className="form-label visually-hidden"
                  >
                    City, state, or zip
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-prepend input-group-text">
                      <i className="bi-geo-alt" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="cityForm"
                      placeholder="City, state, or zip"
                      aria-label="City, state, or zip"
                    />
                  </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
              {/* End Input Card */}
            </form>
            <div className="row align-items-center">
              <div className="col-md-auto mb-3 mb-lg-0">
                <h6 className="mb-1">Limit search to:</h6>
              </div>
              {/* End Col */}
              <div className="col-md mb-3 mb-lg-0">
                {/* Check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="jobSearchToCheckbox1"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jobSearchToCheckbox1"
                  >
                    Job title
                  </label>
                </div>
                {/* End Check */}
                {/* Check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="jobSearchToCheckbox2"
                    defaultValue="option2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jobSearchToCheckbox2"
                  >
                    Skills
                  </label>
                </div>
                {/* End Check */}
                {/* Check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="jobSearchToCheckbox3"
                    defaultValue="option3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jobSearchToCheckbox3"
                  >
                    Companies
                  </label>
                </div>
                {/* End Check */}
                {/* Check */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="jobSearchToCheckbox4"
                    defaultValue="option4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="jobSearchToCheckbox4"
                  >
                    Field of study
                  </label>
                </div>
                {/* End Check */}
              </div>
              <div className="col-md-auto">
                {/* Switch */}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remoteOnlySwitch"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="remoteOnlySwitch"
                  >
                    Remote only
                  </label>
                </div>
                {/* End Switch */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Hero */}
        {/* Card Grid */}
        <div className="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
          <div className="row">
            <div className="col-lg-3 order-lg-2">
              {/* Navbar */}
              <div className="navbar-expand-lg mb-5">
                {/* Navbar Toggle */}
                <div className="d-grid">
                  <button
                    type="button"
                    className="navbar-toggler btn btn-white mb-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarVerticalNavMenu"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="navbarVerticalNavMenu"
                  >
                    <span className="d-flex justify-content-between align-items-center">
                      <span className="text-dark">Filter</span>
                      <span className="navbar-toggler-default">
                        <i className="bi-list" />
                      </span>
                      <span className="navbar-toggler-toggled">
                        <i className="bi-x" />
                      </span>
                    </span>
                  </button>
                </div>
                {/* End Navbar Toggle */}
                {/* Navbar Collapse */}
                <div
                  id="navbarVerticalNavMenu"
                  className="collapse navbar-collapse"
                >
                  <div className="w-100">
                    {/* Form */}
                    <form>
                      <div className="mb-5">
                        <h5 className="mb-3">Distance</h5>
                        <p className="form-text">
                          Within <span id="rangeSliderDistance" /> miles of{" "}
                          <span className="fw-semibold text-dark">London</span>
                        </p>
                        {/* Range Slider */}
                        <div className="range-slider">
                          <div
                            className="js-nouislider"
                            data-hs-nouislider-options='{
                         "range": {
                           "min": 0,
                           "max": 100
                         },
                         "connect": [true, false],
                         "start": 25,
                         "result_min_target_el": "#rangeSliderDistance"
                       }'
                          ></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-5">
                          <span className="text-body">5 miles</span>
                          <span className="text-body">100 miles</span>
                        </div>
                        {/* End Range Slider */}
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">Last updated</h5>
                        {/* Select */}
                        <select className="form-select form-select-sm">
                          <option value="within last day">
                            within last day
                          </option>
                          <option value="within last week">
                            within last week
                          </option>
                          <option value="within last month">
                            within last month
                          </option>
                          <option value="within last 3 months">
                            within last 3 months
                          </option>
                          <option value="within last 6 months" selected="">
                            within last 6 months
                          </option>
                          <option value="show all resumes">
                            show all resumes
                          </option>
                        </select>
                        {/* End Select */}
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">Job titles</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobTitleCheckbox1"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobTitleCheckbox1"
                            >
                              Graphic Designer{" "}
                              <span className="ms-auto">2</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobTitleCheckbox2"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobTitleCheckbox2"
                            >
                              UI/UX Designer <span className="ms-auto">2</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobTitleCheckbox3"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobTitleCheckbox3"
                            >
                              Full Stack Developer{" "}
                              <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobTitleCheckbox4"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobTitleCheckbox4"
                            >
                              Information Associate{" "}
                              <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">Company</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox1"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox1"
                            >
                              Capsule <span className="ms-auto">2</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox2"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox2"
                            >
                              Dropbox <span className="ms-auto">18</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox3"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox3"
                            >
                              Mailchimp <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox4"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox4"
                            >
                              Google <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox5"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox5"
                            >
                              Prosperops <span className="ms-auto">2</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobCompanyCheckbox6"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobCompanyCheckbox6"
                            >
                              Figam <span className="ms-auto">6</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">Years of experience</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobYearExperienceCheckbox1"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobYearExperienceCheckbox1"
                            >
                              6-10 years <span className="ms-auto">73</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobYearExperienceCheckbox2"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobYearExperienceCheckbox2"
                            >
                              3-5 years <span className="ms-auto">3</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobYearExperienceCheckbox3"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobYearExperienceCheckbox3"
                            >
                              More than 10 years{" "}
                              <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">Education</h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobEducationCheckbox1"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobEducationCheckbox1"
                            >
                              Bachelors <span className="ms-auto">6</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobEducationCheckbox2"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobEducationCheckbox2"
                            >
                              Masters <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobEducationCheckbox3"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobEducationCheckbox3"
                            >
                              Associates <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3">
                          Assessment{" "}
                          <i
                            className="bi-question-circle text-body ml-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate."
                          />
                        </h5>
                        <div className="d-grid gap-2">
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobAssessmentCheckbox1"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobAssessmentCheckbox1"
                            >
                              Attention to detail{" "}
                              <span className="ms-auto">3</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobAssessmentCheckbox2"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobAssessmentCheckbox2"
                            >
                              Graphic design <span className="ms-auto">7</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobAssessmentCheckbox3"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobAssessmentCheckbox3"
                            >
                              Social Media <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                          {/* Checkboxes */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="jobAssessmentCheckbox4"
                            />
                            <label
                              className="form-check-label d-flex"
                              htmlFor="jobAssessmentCheckbox4"
                            >
                              Marketing <span className="ms-auto">1</span>
                            </label>
                          </div>
                          {/* End Checkboxes */}
                        </div>
                      </div>
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-white btn-transition"
                        >
                          Clear all
                        </button>
                      </div>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
                {/* End Navbar Collapse */}
              </div>
              {/* End Navbar */}
            </div>
            {/* End Col */}
            <div className="col-lg-9">
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
                      <select className="form-select form-select-sm">
                        <option value="Relevance" selected="">
                          Relevance
                        </option>
                        <option value="mostRecent">Most recent</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm">
                        <option value="alphabeticalOrderSelect1" selected="">
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
              {/* Pagination */}
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="bi-chevron-double-left small" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="bi-chevron-double-right small" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Pagination */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="bg-dark">
        <div className="container pb-1 pb-lg-5">
          <div className="row content-space-t-2">
            <div className="col-lg-3 mb-7 mb-lg-0">
              {/* Logo */}
              <div className="mb-5">
                <a
                  className="navbar-brand"
                  href="../index.html"
                  aria-label="Space"
                >
                  <img
                    className="navbar-brand-logo"
                    src="../assets/svg/logos/logo-white.svg"
                    alt="Image Description"
                  />
                </a>
              </div>
              {/* End Logo */}
              {/* List */}
              <ul className="list-unstyled list-py-1">
                <li>
                  <a className="link-sm link-light" href="#">
                    <i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza,
                    Maggieberg
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="tel:1-062-109-9222">
                    <i className="bi-telephone-inbound-fill me-1" /> +1 (062)
                    109-9222
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="text-white mb-3">Company</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Careers{" "}
                    <span className="badge bg-warning text-dark rounded-pill ms-1">
                      We're hiring
                    </span>
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Customers <i className="bi-box-arrow-up-right small ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Hire us
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="text-white mb-3">Features</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="#">
                    Press <i className="bi-box-arrow-up-right small ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="text-white mb-3">Documentation</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="#">
                    Support
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Status
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    API Reference
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    Tech Requirements
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm">
              <h5 className="text-white mb-3">Resources</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-5">
                <li>
                  <a className="link-sm link-light" href="#">
                    <i className="bi-question-circle-fill me-1" /> Help
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">
                    <i className="bi-person-circle me-1" /> Your Account
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="border-top border-white-10 my-7" />
          <div className="row mb-7">
            <div className="col-sm mb-3 mb-sm-0">
              {/* Socials */}
              <ul className="list-inline list-separator list-separator-light mb-0">
                <li className="list-inline-item">
                  <a className="link-sm link-light" href="#">
                    Privacy &amp; Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="link-sm link-light" href="#">
                    Terms
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="link-sm link-light" href="#">
                    Site Map
                  </a>
                </li>
              </ul>
              {/* End Socials */}
            </div>
            <div className="col-sm-auto">
              {/* Socials */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                    <i className="bi-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                    <i className="bi-google" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                    <i className="bi-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                    <i className="bi-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  {/* Button Group */}
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-soft-light btn-xs dropdown-toggle"
                      id="footerSelectLanguage"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-dropdown-animation=""
                    >
                      <span className="d-flex align-items-center">
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </span>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="footerSelectLanguage"
                    >
                      <a
                        className="dropdown-item d-flex align-items-center active"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/de.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/es.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Español</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </li>
              </ul>
              {/* End Socials */}
            </div>
          </div>
          {/* Copyright */}
          <div className="w-md-85 text-lg-center mx-lg-auto">
            <p className="text-white-50 small">
              © Front. 2021 Htmlstream. All rights reserved.
            </p>
            <p className="text-white-50 small">
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
          {/* End Copyright */}
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
      {/* ========== SECONDARY CONTENTS ========== */}
      {/* Go To */}
      <a
        className="js-go-to go-to position-fixed"
        style={{ visibility: "hidden" }}
        data-hs-go-to-options='{
          "offsetTop": 700,
          "position": {
            "init": {
              "right": "2rem"
            },
            "show": {
              "bottom": "2rem"
            },
            "hide": {
              "bottom": "-2rem"
            }
          }
        }'
      >
        <i className="bi-chevron-up" />
      </a>
      {/* ========== END SECONDARY CONTENTS ========== */}
      {/* JS Global Compulsory  */}
      {/* JS Implementing Plugins */}
      {/* JS Front */}
      {/* JS Plugins Init. */}
    </>
  );
};

export default Test;
