import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import "../../css/Dashboard.css";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";

function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}

const Humberger = () => {
  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { user, allUserForSpecificGroupData } = authContext;
  const { allCompanyData, GetAllCompany, SetUserIdForShowingResult, err } =
    testContext;

  return (
    <div className="navbarDash">
      <Navbar bg="light" expand={false}>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              پنل مدیریت
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/Dashboard">
                <Nav.Link href="#action1">تنظیمات شخصی</Nav.Link>
              </NavLink>
              <NavLink to="/ListExams">
                {" "}
                <Nav.Link href="#action2">لیست آزمون ها </Nav.Link>
              </NavLink>
              <NavLink to="/SelectExams">
                <Nav.Link href="#action2">نتایج آزمون ها</Nav.Link>
              </NavLink>
              {user ? (
                user.UserType == 1 ? (
                  <NavLink to="/AllUsers">
                    <Nav.Link href="#action2">مدیریت اعضا</Nav.Link>
                  </NavLink>
                ) : null
              ) : null}
              {user ? (
                user.UserType == 1 ? (
                  <NavLink to="/Companies">
                    <Nav.Link href="#action2">مدیریت سازمان ها</Nav.Link>
                  </NavLink>
                ) : null
              ) : null}
              {/* <NavDropdown
                        title="کدهای آزمون "
                        id="offcanvasNavbarDropdown"
                      
                        <NavDropdown.Item href="#action3">
                          لیست شناسه ها
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          {" "}
                          نتایح آزمون
                        </NavDropdown.Item>
                        
                      </NavDropdown> */}
              {/* <NavDropdown
                        title="مدیریت پروژه ها "
                        id="offcanvasNavbarDropdown"
                      >
                        <NavLink to="/ManageContact/:Id">
                        <NavDropdown.Item href="#action3">
                          مدیریت اعضا
                      </NavDropdown.Item>
                      </NavLink> */}
              {/* <NavDropdown.Item href="#action3">
                          لیست پروژه ها
                        </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action4">
                          {" "}
                          پروژه جدید
                        </NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item> */}
              {/* </NavDropdown> */}
              {user ? (
                user.UserType > 2 || user.UserType == 1 ? (
              <NavLink to="/CompanyAdmin">
                <Nav.Link href="#action2">مدیریت اعضای سازمانی</Nav.Link>
              </NavLink>
               ) : null
               ) : null}
            </Nav>
            {/* <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="جستجو"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">جستجو</Button>
                    </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default Humberger;
