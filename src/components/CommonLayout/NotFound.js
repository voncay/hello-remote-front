import { Link } from 'react-router-dom'

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
              alt="Error illustration"
              style={{ width: "30rem" }}
            />
          </div>
          <div className="mb-4">
            <p className="fs-4 mb-0">
              Oops! Looks like you followed a bad link.
            </p>
          </div>
          <Link to={'/'} className="btn btn-primary">
            Go back home
          </Link>
        </div>
        {/* End Content */}
      </main>
    </>
  );
};

export default NotFound;
