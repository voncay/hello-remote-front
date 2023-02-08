import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <>
      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <Link className="page-link" to={'/'} aria-label="Previous">
              <span aria-hidden="true">
                <i className="bi-chevron-double-left small" />
              </span>
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to={'/'}>
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={'/'}>
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={'/'}>
              3
            </Link>
          </li>
          <li className="page-item disabled">
            <Link className="page-link" to={'/'}>
              ...
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={'/'}>
              5
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={'/'} aria-label="Next">
              <span aria-hidden="true">
                <i className="bi-chevron-double-right small" />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* End Pagination */}
    </>
  )
}

export default Pagination;
