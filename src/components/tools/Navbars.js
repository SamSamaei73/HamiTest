import { useContext } from "react";
import "../../css/Navbar.css";
import search from "../../images/icons8-search-32.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";

const Navbars = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div id="Navbars">
      <div className="searchBox">
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="...  جستجو نمایید "
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">
            <img src={search} alt="search" />
          </Button>
        </Form> */}
      </div>
      <div className="menubar">
        <div id="NavbarContainer">
          <ul id="menu">
            <li>
              <NavLink to="/">
                <a> خانه</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ListExams">
                {" "}
                <a>لیست آزمون ها </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Articles">
                {" "}
                <a>مقالات</a>
              </NavLink>
            </li>

            {/* <li>
              <a> مقالات </a>
              <ul>
                <li>
                  <NavLink to="/">
                    {" "}
                    <a>مقالات</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    {" "}
                    <a>مقالات</a>
                  </NavLink>
                </li>
              </ul>
            </li> */}

            {/* <li>
              <NavLink to="/Store">
                <a>فروشگاه </a>
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/Support">
                <a>پشتیبانی </a>
              </NavLink>
            </li>

            <li>
              {user ? (
                <NavLink to="/Dashboard">
                  <a>پنل کاربری </a>
                </NavLink>
              ) : null}
            </li>
          </ul>
        </div>

        <div id="NavbarContainer2">
          <ul id="menu">
            <li>
              <a style={{ fontSize: "1.5rem" }}> ☰ </a>
              <ul>
                <li>
                  <NavLink to="/ListExams">
                    {" "}
                    <a>لیست آزمون ها </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Articles">
                    {" "}
                    <a>مقالات</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/Store">
                    <a>فروشگاه </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Support">
                    <a>پشتبانی </a>
                  </NavLink>
                </li>

                <li>
                  {user ? (
                    <NavLink to="/Dashboard">
                      <a>پنل کاربری </a>
                    </NavLink>
                  ) : null}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
