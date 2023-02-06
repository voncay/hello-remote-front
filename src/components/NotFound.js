const NotFound = () => {
  return (
    <>
      <main id="content" role="main">
        {/* Content */}
        <div className="container text-center">
          <div className="mb-3">
            <img
              className="img-fluid"
              src="./assets/svg/illustrations/oc-error.svg"
              alt="Image Description"
              style={{ width: "30rem" }}
            />
          </div>
          <div className="mb-4">
            <p className="fs-4 mb-0">
              Oops! Looks like you followed a bad link.
            </p>
            <p className="fs-4">
              If you think this is a problem with us, please{" "}
              <a className="link" href="#">
                tell us
              </a>
              .
            </p>
          </div>
          <a className="btn btn-primary" href="./index.html">
            Go back home
          </a>
        </div>
        {/* End Content */}
      </main>
    </>
  );
};

export default NotFound;
