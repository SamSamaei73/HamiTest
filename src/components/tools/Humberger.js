import React from 'react';
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

const Humberger = () => {
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
                      <Nav.Link href="#action2">
                        آزمون ها ی درخواست شده
                      </Nav.Link>
                      
                      </NavLink>

                      <NavLink to="/AllUsers">
                      <Nav.Link href="#action2">
                        مدیریت اعضا
                      </Nav.Link>
                      
                      </NavLink>
                      {/* <NavDropdown
                        title="کدهای آزمون "
                        id="offcanvasNavbarDropdown"
                      >
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
                      <NavLink to="/Resultexam">

                      <Nav.Link href="#action2">تراکنش ها </Nav.Link>
                      </NavLink>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="جستجو"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">جستجو</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            </div>
  )
}

export default Humberger