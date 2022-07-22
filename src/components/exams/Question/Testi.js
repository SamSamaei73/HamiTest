import React, { useMemo, useState, useContext, useEffect } from "react";
import MeetingContext from '../Context/meetingContext';
import { SpecificInsuranceColumns } from './Common/Columns';
import CustomTable from './Common/CustomTable';
import '../css/Bimeh.css';
import Navbar from './Navbar';
import '../css/Forms.css';
import MedicLogo from '../../src/images/medical-logo-png-882.png';
import MedicLogo2 from '../../src/images/medical-logo-png-905.png';
import { Button } from 'bootstrap';
import Select from 'react-select';
import TableLogo from '../images/icons8-data-sheet-96.png';
import Popup from './Popup';
import DatePicker from "react-multi-date-picker"
import Footer from './Footer';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Swal from 'sweetalert2';
import Editforms from "./Forms/Editforms";
import {ContractType} from "./Common/DropDown";
import {BimehTitle} from "../Constant/constant";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";







const Bimeh = () => {
  document.title=BimehTitle;
  const [loading,setLoading]=useState(false)

  
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const meetingContext = useContext(MeetingContext);
  const [ContractNo, setContractNo] = useState(null);
  const [Contractor, setContractor] = useState(null);
  const [ContractDateAsOf, setContractDateAsOf] = useState(new Date());
  const [ContractDateTill, setContractDateTill] = useState(new Date());
  const [PersianContractStartDate, setPersianContractStartDate] = useState();

  const [PersianContractEndDate, setPersianContractEndDate] = useState();
  const [SelectedContractType, setSelectedContractType] = useState(null);
  const {
    currentUser,  
    GetMeetingById,
    SetSelectedPersonData,
    selectedPersonData,
    GetInsuranceList,
    contractListData,
    GetHealthContracts,
    GetHealthRecipes,
    healathRecipesListData,
    CreateOrUpdateHealthContract,
    createdOrUpdatedHealthContractData,
    DeleteHealthContractById,
    deletedHealthContractData,


  } = meetingContext;
  
  useEffect(() => {
    GetHealthContracts();
    GetHealthRecipes();
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },1000)
   
  }, []);
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case 'ContractNoEdit':
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setContractNo(e.target.value);
        break;
      case 'ContractorEdit':
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setContractor(e.target.value);
        break;
      

      default:
        break;
    }
  };
 
    
  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            <div className="Operations">
              {/* <button
                  type="button"
                  id="Print"
                  className="editBtn"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg2"
                  onClick={Editforms}
                >
            
                  ویرایش
                </button>  */}
              <Editforms EditData={row.original}/>
              <button
                type="button"
                id="Print"
                className="editBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg2"
                onClick={async (e) => {
                  Swal.fire({
                    title: "آیا مطمئن از حذف قرارداد هستید ؟",
                    text: "قرارداد به صورت کامل حذف میشود",
                    icon: "question",
                    iconColor:"red",
                    colorTitle:"#fff",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "حذف",
                    cancelButtonText: "انصراف"
                    
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      //console.log("healthShoParBachData :", row.original);
                      await DeleteHealthContractById(row.original.ObjectId);
                     // RefreshGridAfterDeleteItem();
                     //console.log("deletedResponse is:", deletedHealthContractData);
                     Swal.fire(
                       "!حذف",
                       ".قرارداد شما با موفقیت حذف شد ",
                       "success",
                     );
                     if (deletedHealthContractData) {
                       if (deletedHealthContractData.Deleted) {
                        
                         await GetHealthContracts();
                       }
                     }
                    }
                  });
                }}
              >
                حذف
              </button>
            </div>
          </div>
        ),
      },
    ],
  };
  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin,SpecificInsuranceColumns],

    []
  );
  const InsertItemToContract = async (e) => {
    //     if(MahBachNo.length <= 0 ){
    // setIsNotValid(true);
    //  setErrorMessage("لطفا شماره بسته ارسالی را تکمیل نمایید");
    //     }else{
    //       setIsNotValid(false);
    //     }

    let HealthContractItemData = {
      ObjectId: 0,
      ContractNo: ContractNo,
      Contractor: Contractor,
      ContractDateAsOf: PersianContractStartDate,
      ContractDateTill:  PersianContractEndDate,
      ContractType: SelectedContractType.value
    };
    //console.log("InsertedHealthContract Data :", HealthContractItemData);
    await CreateOrUpdateHealthContract(HealthContractItemData, false);
    Swal.fire({
      icon: 'success',
      title: 'قرارداد جدید با موفقیت ثبت شد',
      showConfirmButton: false,
      timer: 1500
    });
    //console.log(' before checking created:',createdOrUpdatedHealthContractData);
    if (createdOrUpdatedHealthContractData) {
      if (createdOrUpdatedHealthContractData.Insert) {
        setContractNo("");
        setContractor("");
        setContractDateAsOf(null);
        setContractDateTill(null);
        setPersianContractStartDate("");
        setPersianContractEndDate("");
        setSelectedContractType(null);
        GetHealthContracts();

      }
    }
  };
  const RefreshGridAfterDeleteItem=async () => {
    //console.log("deletedResponse is:", deletedHealthContractData);
    if (deletedHealthContractData) {
      if (deletedHealthContractData.Deleted) {
       setIsOpen(!isOpen);
       await GetHealthContracts();
      }

    }
  }
  
  const override = css`
    top: 20rem;
    left : 40rem;    
  `;

  return (
    <div className="BimehCustom">
      {
        loading ?
        <HashLoader color={'#D15998'} loading={loading} css={override} size={150} />

        :

      <div className="BimehBody">
        <Navbar />
        <div className="BimeStyle">
          <div className="CalumPopup">
            <input
              id="PopupInput"
              value="جدید"
              type="button"
              onClick={togglePopup}
            />
            {isOpen && (
              <Popup
                content={
                  <>
                    <div className="InputBimeh">
                      <div className="form_put1">
                        <div className="form-group mr-2  text-center">
                          <input
                            placeholder="شماره قرارداد"
                            style={{ width: "200px", height: "38px" }}
                            type="text"
                            value={ContractNo}
                            onChange={(e) => {
                              onChanged(e, "ContractNoEdit", 900);
                            }}
                            className="text-center form-control"
                          />
                        </div>
                        <div className="form-group mr-2 text-center">
                          <input
                            placeholder="طرف قرارداد"
                            style={{ width: "150px", height: "38px" }}
                            type="text"
                            value={Contractor}
                            onChange={(e) => {
                              onChanged(e, "ContractorEdit", 900);
                            }}
                            className="text-center form-control"
                          />
                        </div>
                        <div className="form-group mr-2 text-center">
                          <DatePicker
                            placeholder="تاریخ شروع قرارداد"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            style={{ height: "38px", textAlign: "center" }}
                            className="CalanderStyle"
                            value={ContractDateAsOf}
                            onChange={(value) => {
                              //console.log(
                                "selected date is :",
                                value.toLocaleString()
                              );
                              var pdata = value.toLocaleString();
                              setPersianContractStartDate(pdata);
                              //setMiladiContractStartDate(value)

                              setContractDateAsOf(value);
                            }}
                          />
                        </div>
                        <div className="form-group mr-2 text-center">
                          <DatePicker
                            placeholder="تاریخ خاتمه قرارداد"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            style={{ height: "38px", textAlign: "center" }}
                            className="CalanderStyle"
                            value={ContractDateTill}
                            onChange={(value) => {
                              //console.log(
                                "selected date is :",
                                value.toLocaleString()
                              );
                              var pdata = value.toLocaleString();
                              setPersianContractEndDate(pdata);
                              //setMiladiContractEndDate(value)
                              setContractDateTill(value);
                            }}
                          />
                        </div>
                        <div className="form-group mr-2 text-center">
                          <Select
                            placeholder="نوع قرارداد"
                            value={SelectedContractType}
                            options={ContractType}
                            onChange={(e) => {
                              //console.log(`Option selected:`, e);
                              setSelectedContractType(e);
                            }}
                            className="ContractNo"
                          />
                        </div>
                      </div>
                      <div className="buttunForm_Bime">
                        <button
                          id="ButtonNew"
                          className="ButtonNew"
                          type="button"
                          onClick={(e) => 
                            InsertItemToContract()}
                        >
                          ذخیره
                        </button>
                      </div>
                    </div>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>

          <div className="colum-space">
            <CustomTable
              columns={KartableColumnsForAdmin}
              data={contractListData ? contractListData : []}
            />
          </div>
        </div>
        <Footer/>
      </div>
      }
    </div>
  );
};

export default Bimeh;