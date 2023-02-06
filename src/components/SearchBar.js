const SearchBar = () => {
  return (
    <>
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
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default SearchBar;
