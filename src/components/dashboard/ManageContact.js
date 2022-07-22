import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/ManageContact.css";
import Header from "../tools/Header";
import Navbar from "../tools/Navbars";
import Footer from "../tools/Footer";
import CustomTable from "../column/CustomTable";
import { AddPerson } from "../column/Columns";
import Addperson from "../../images/icons8-add-user-group-woman-man-100.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormAddPerson from "./FormAddPerson";

const ManageContact = () => {
  const [healthRecipiesData, setHealthRecipiesData] = useState(null);

  const KartableColumnsForAdmin = useMemo(
    () => [AddPerson],

    []
  );

  return (
    <div id="ManageContact">
      <Header />
      <Navbar />
      <div className="addPerson">
        <Popup
          trigger={
            <div className="StyleImageAdd">
              <img src={Addperson} alt="Addperson" />
            </div>
          }
          modal
        >
          <FormAddPerson />
        </Popup>
      </div>
      <div className="tablePersonInfo">
        <CustomTable
          columns={KartableColumnsForAdmin}
          data={healthRecipiesData ? healthRecipiesData : []}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ManageContact;
