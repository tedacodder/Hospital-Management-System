//import { Routes, Route, Link } from "react-router-dom";

interface prop {
  items: { pathname: string; path: string }[];
  Role?: string;
}
function Navbar({ items, Role }: prop) {
  return (
    <>
      <nav
        className="bg-dark navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <a className="navbar-brand" href="#">
          🏥 Hospital Dashboard
        </a>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-brand" href="#">
                  {Role} Dashboard
                </a>
              </li>

              {items.map((val) => (
                <li className="nav-item" key={val.path}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={val.path}
                  >
                    {val.pathname}
                  </a>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
