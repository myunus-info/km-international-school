import { NavLink, Link } from "react-router-dom";
import logo from "./../images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div
        className="bg-success"
        style={{ height: "80px", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg p-0 m-0">
                <div className="container-fluid">
                  <NavLink className="navbar-brand fw-bold" href="#">
                    <img
                      style={{ width: "120px", height: "80px" }}
                      src={logo}
                      alt="logo"
                    />
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* Sidebar */}
                  <div
                    className="sidebar collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* Sidebar-Header */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 border-bottom">
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/admission"
                        >
                          Admission
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          style={{ color: "#fff" }}
                          to="/"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Departments
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/english-bgs">
                              English &amp; BGS
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/math-science">
                              Math &amp; Science
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/islamic-studies"
                            >
                              Islamic Studies
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/bangla">
                              Bangla
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/notice"
                        >
                          Notice
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          style={{ color: "#fff" }}
                          to="/"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Gallery
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/photo-gallery">
                              Photo Gallery
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="https://www.youtube.com/channel/UC0fu3eYEHm9wpF-1lhrNOKw"
                            >
                              Video Gallery
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/career"
                        >
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          style={{ color: "#fff" }}
                          className="nav-link active"
                          aria-current="page"
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <marquee
        direction="left"
        style={{
          color: "yellow",
          backgroundColor: "#040720",
          fontWeight: "600",
          fontSize: "1.25rem",
          padding: ".5rem 0",
          marginBottom: "-.35rem",
        }}
      >
        Experienced Teachers Required for Gopaldi K M International School in
        Various Disciplines. Call: 01818-251075
      </marquee>
    </>
  );
}
