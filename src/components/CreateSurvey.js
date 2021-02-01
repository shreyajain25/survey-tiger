import logo from "../logo.PNG";
import "../App.css";
// import { Button } from "reactstrap";
// import style from "../Mycss.module.css";
import React, { useState } from "react";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap";

function CreateSurvey() {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [dropdownText, setDropdownText] = useState("Select Question Type");

   const toggle = () => setDropdownOpen((prevState) => !prevState);

   return (
      <>
         <img src={logo} className="App-logo" alt="logo" />
         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{dropdownText}</DropdownToggle>
            <DropdownMenu direction="down">
               <DropdownItem
                  onClick={() => {
                     setDropdownText("Multi Select Question");
                  }}
               >
                  Multi Select Question
               </DropdownItem>
               <DropdownItem
                  onClick={() => {
                     setDropdownText("Single Select Question");
                  }}
               >
                  Single Select Question
               </DropdownItem>
            </DropdownMenu>
         </Dropdown>
         {dropdownText === "Multi Select Question" ? <MultiSelect /> : null}
         {dropdownText === "Single Select Question" ? <SingleSelect /> : null}
      </>
   );
}

export default CreateSurvey;
