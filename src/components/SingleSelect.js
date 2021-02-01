import logo from "../logo.PNG";
import "../App.css";
import { Button } from "reactstrap";
import style from "../Mycss.module.css";
import {
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Input,
   Container,
} from "reactstrap";

import React, { useState } from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap";
function SingleSelect() {
   return (
      <div className={style.questionContainer}>
         <InputGroup>
            <InputGroupAddon addonType="prepend">
               <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Your Question" />
         </InputGroup>
         <p className={style.inputQuestion}>Questions</p>
         <InputGroup className={style.inpGrp}>
            <Input placeholder="option 1" />
            <InputGroupAddon addonType="append">
               <InputGroupText>+</InputGroupText>
               <InputGroupText>-</InputGroupText>
            </InputGroupAddon>
         </InputGroup>{" "}
         <InputGroup className={style.inpGrp}>
            <Input placeholder="option 2" />
            <InputGroupAddon addonType="append">
               <InputGroupText>+</InputGroupText>
               <InputGroupText>-</InputGroupText>
            </InputGroupAddon>
         </InputGroup>
         <Button className={style.surveymainbutton}>Add Question</Button>
         <Button className={style.surveymainbutton}>Publish</Button>
      </div>
   );
}
export default SingleSelect;
