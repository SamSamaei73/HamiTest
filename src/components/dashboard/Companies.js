import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import "../../sass/companies.scss";
import TestContext from "../../Context/Test/testContext";
import AuthContext from "../../Context/Auth/authContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Humberger from "../tools/Humberger";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { companyMangment } from "../tools/Constant";
import Close from '../../images/icons8-close-window-48.png';

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

const Companies = () => {
  document.title = companyMangment;

  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const { GetAllUserForSpecificGroup, allUserForSpecificGroupData } =
    authContext;
  const {
    GetOthersTestName,
    otherTestNames,
    allCompanyData,
    GetAllCompany,
    UpdateCompanyInfo,
    updateCompanyData,
    newCompanyPost,
    CreateNewCompany,
    companyExamNames,
    GetCompanyTest,
    checkTestPackage,
    CheckCompanyPackage,
    selectPackageCheck,
    GetCeckSelectPackage,
    GetCeckSelectTests,
    selectTestsCheck,

    err,
  } = testContext;

  const [Name, setName] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Address, setAddress] = useState(null);
  const [ManagerName, setManagerName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Tel1, setTel1] = useState(null);
  const [Tel2, setTel2] = useState(null);
  const [Fax, setFax] = useState(null);
  const [PostCode, setPostCode] = useState(null);
  const [PackageId, setPackageId] = useState(null);
  const [CompanyId, setCompanyId] = useState(null);
  const [CompanyData, setCompanyData] = useState([]);
  const [CompanyTestName, setCompanyTestName] = useState([]);
  const [showCompanyPackage, setshowCompanyPackage] = useState(false);
  const [showCompanyTest, setshowCompanyTest] = useState(false);
  const [OthersTestName, setOthersTestName] = useState([]);
  const [EditId, setEditId] = useState(null);
  const [CompanyName, setCompanyName] = useState(null);
  const [ShowAccess, setShowAccess] = useState(false);

  const sendNewCompanyData = (e) => {
    let newCompany = {};
    newCompany.Name = Name;
    newCompany.Description = Description;
    newCompany.Address = Address;
    newCompany.Email = Email;
    newCompany.ManagerName = ManagerName;
    newCompany.Tel1 = Tel1;
    newCompany.Tel2 = Tel2;
    newCompany.Fax = Fax;
    newCompany.PostCode = PostCode;

    console.log(newCompany);

    CreateNewCompany(newCompany);
  };

  useEffectSkipFirst(() => {
    if (newCompanyPost) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "شرکت جدید ثبت شد",
        showConfirmButton: false,
        timer: 1500,
      });
      GetAllCompany();
    }
  }, [newCompanyPost]);

  useEffectSkipFirst(() => {
    if (updateCompanyData) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "شرکت بروز رسانی شد",
        showConfirmButton: false,
        timer: 1500,
      });
      GetAllCompany();
      clearInputsForm();
    }
  }, [updateCompanyData]);

  useEffectSkipFirst(() => {
    if (checkTestPackage) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "دسترسی آزمون ها ثبت گردید",
        showConfirmButton: false,
        timer: 1500,
      });
      GetAllCompany();
    }
  }, [checkTestPackage]);

  const clearInputsForm = () => {
    setName("");
    setManagerName("");
    setTel1("");
    setTel2("");
    setFax("");
    setEmail("");
    setAddress("");
    setPostCode("");
    setEditId("");
  };

  useEffect(() => {
    GetAllCompany();
    GetCompanyTest();
    GetOthersTestName();
  }, []);

  useEffectSkipFirst(() => {
    if (otherTestNames) {
      let newData = otherTestNames.map((item) => {
        let newItem = {};
        newItem.id = item.Id;
        newItem.Name = item.Name;

        return newItem;
      });
      setOthersTestName(newData);
    }
  }, [otherTestNames]);

  useEffectSkipFirst(() => {
    if (selectPackageCheck) {
      // console.log("azmon",selectPackageCheck);
      //setlist(selectPackageCheck);
      setshowCompanyPackage(true);
      setCompanyTestName(selectPackageCheck);
    }
  }, [selectPackageCheck]);
  useEffectSkipFirst(() => {
    if (selectTestsCheck) {
      // setCompanyTestName(selectPackageCheck);
      setshowCompanyTest(true);
      setOthersTestName(selectTestsCheck);
    }
  }, [selectTestsCheck]);

  useEffectSkipFirst(() => {
    if (companyExamNames) {
      let newData = companyExamNames.map((item) => {
        let newItem = {};
        newItem.id = item.Id;
        newItem.Name = item.Name;

        return newItem;
      });
      setCompanyTestName(newData);
    }
  }, [companyExamNames]);

  useEffectSkipFirst(() => {
    if (allCompanyData) {
      let newData = allCompanyData.map((item) => {
        let newItem = {};
        newItem.id = item.id;
        newItem.Name = item.Name;
        newItem.ManagerName = item.ManagerName;
        newItem.Tel1 = item.Tel1;
        newItem.Tel2 = item.Tel2;
        newItem.Fax = item.Fax;
        newItem.PostCode = item.PostCode;
        return newItem;
      });
      setCompanyData(newData);
    }
  }, [allCompanyData]);

  const EditCompanyData = (data) => {
    setName(data.Name);
    setManagerName(data.ManagerName);
    setTel1(data.Tel1);
    setTel2(data.Tel2);
    setFax(data.Fax);
    setEmail(data.Email);
    setAddress(data.Address);
    setPostCode(data.PostCode);
    setEditId(data.id);
  };
  const UpdateCompanyInformation = () => {
    let newCompany = {};
    newCompany.id = EditId;
    newCompany.Name = Name;
    newCompany.Description = Description;
    newCompany.Address = Address;
    newCompany.Email = Email;
    newCompany.ManagerName = ManagerName;
    newCompany.Tel1 = Tel1;
    newCompany.Tel2 = Tel2;
    newCompany.Fax = Fax;
    newCompany.PostCode = PostCode;

    console.log(newCompany);

    UpdateCompanyInfo(newCompany);
  };
  const CheckPackage = () => {
    let newCompany = {};
    newCompany.UserTypeId = parseInt(CompanyId);

    console.log(newCompany);
    let testids = OthersTestName.filter((item) => item.hasAccess);
    let testStr = "";
    testids = testids.map((item) => item.Id);
    testids.map((item) => {
      testStr += item + ",";
    });
    if (testStr.length > 0) {
      testStr = testStr;
    }
    let packageids = CompanyTestName.filter((item) => item.hasAccess);
    let packageStr = "";
    packageids = packageids.map((item) => item.Id);
    packageids.map((item) => {
      packageStr += item + ",";
    });
    console.log(packageStr);

    if (CompanyId) {
      newCompany.PackageId1 = packageStr.substring(0, packageStr.length - 1);
      newCompany.TestId1 = testStr.substring(0, testStr.length - 1);
      //  console.log(newCompany);
      CheckCompanyPackage(newCompany);
    }
  };

  const OnChangePackage = (value, id) => {
    setshowCompanyPackage(false);
    //setCompanyTestName(null);
    CompanyTestName.map((item) => {
      if (item.Id == id) {
        item.hasAccess = value;
      }
    });
    setTimeout(() => {
      setshowCompanyPackage(true);
    }, 1);
    //setshowCompanyPackage(true);

    //console.log(tempdata);
    // setPackageId(parseInt(id))
  };

  const OnChangeTest = (value, id) => {
    setshowCompanyTest(false);
    //console.log(OthersTestName);
    //setCompanyTestName(null);
    OthersTestName.map((item) => {
      if (item.Id == id) {
        item.hasAccess = value;
      }
    });
    setTimeout(() => {
      setshowCompanyTest(true);
    }, 1);
    //setshowCompanyPackage(true);

    //console.log(tempdata);
    // setPackageId(parseInt(id))
  };
  const getpackages = (id, CompanyName) => {
    setCompanyId(id);
    GetCeckSelectPackage(id);
    GetCeckSelectTests(id);
    setCompanyName(CompanyName);

  };

  return (
    <div className="Companies">
      <Header />
      <Navbars />
      <div className="humbergerPlace">
        <Humberger />
      </div>
      <div className="Addcompany">
        <h2 className="titleCompanyadd">ایجاد سازمان جدید</h2>
        <div className="selectAdmin">
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              نام سازمان
            </label>
            <input
              className="InputCompany"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              شماره تلفن ۱
            </label>
            <input
              className="InputCompany"
              type="number"
              value={Tel1}
              onChange={(e) => setTel1(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              شماره تلفن ۲
            </label>
            <input
              className="InputCompany"
              type="number"
              value={Tel2}
              onChange={(e) => setTel2(e.target.value)}
              maxLength={8}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              شماره فکس{" "}
            </label>
            <input
              className="InputCompany"
              type="number"
              value={Fax}
              onChange={(e) => setFax(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              ایمیل
            </label>
            <input
              className="InputCompany"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              نام مدیر سازمان
            </label>
            <input
              className="InputCompany"
              type="text"
              value={ManagerName}
              onChange={(e) => setManagerName(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              کدپستی
            </label>
            <input
              className="InputCompany"
              type="number"
              value={PostCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
          <div className="itemCompany">
            <label className="labelCompany" htmlFor="">
              آدرس
            </label>
            <input
              className="InputCompany"
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="btnStyleCom">
          <button
            className="buttonCompany"
            onClick={(e) => {
              sendNewCompanyData(e);
              // setLoading(true);
            }}
          >
            ثبت
          </button>
          <button
            className="buttonCompany"
            onClick={(e) => {
              UpdateCompanyInformation();
            }}
          >
            ویرایش
          </button>
        </div>
      </div>
      {ShowAccess ? <div className="SelectExamCompany">
        <h3>آزمون های مجاز برای شرکت : {CompanyName}</h3>
        <img src={Close} alt="Close" onClick={(e)=> setShowAccess(false)} />
        <div className="inputsStyle">
          <div className="boxExam">
            <h4>آزمون ها</h4>
            <div className="boxPlace">
              {showCompanyTest
                ? OthersTestName.map((item) => (
                    <div className="items">
                      <input
                        type="checkbox"
                        value={item.hasAccess}
                        checked={item.hasAccess}
                        id={item.Id}
                        className="Check"
                        onChange={(e) => {
                          OnChangeTest(e.target.checked, e.target.id);
                        }}
                      />
                      <label htmlFor="">{item.Name}</label>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="boxExam">
            <h4>آزمون های سازمانی</h4>
            <div className="boxPlace">
              {showCompanyPackage &&
                CompanyTestName.map((Ditem) => (
                  <div className="items">
                    <input
                      type="checkbox"
                      value={Ditem.hasAccess}
                      checked={Ditem.hasAccess}
                      className="Check"
                      id={Ditem.Id}
                      onChange={(e) => {
                        OnChangePackage(e.target.checked, e.target.id);
                      }}
                    />
                    <label htmlFor="">{Ditem.Name}</label>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={(e) => {
            CheckPackage(e.target.id);
          }}
        >
          ثبت
        </button>
      </div>: null}
      


      <div className="tablePlace">
        <table>
          <tr>
            <th>نام سازمان</th>
            <th>مدیر سازمان</th>
            <th>شماره تلفن</th>
            <th>شماره تلفن</th>
            <th>فکس</th>
            <th>کدپستی</th>
            <th></th>
            <th></th>
          </tr>
          {CompanyData.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.ManagerName}</td>
              <td>{item.Tel1}</td>
              <td>{item.Tel2}</td>
              <td>{item.Fax}</td>
              <td>{item.PostCode}</td>
              <td>
                <button
                  className="btnCompanyTest"
                  id={item.id}
                  onClick={(e) => {getpackages(e.target.id, item.Name);
                    setShowAccess(true);}}
                >
                  آزمون ها
                </button>
              </td>
              <td>
                <button
                  className="btnCompanyedit"
                  onClick={(e) => {
                    EditCompanyData(item);
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
