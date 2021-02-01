// import logo from "../logo.PNG";
import "../App.css";
import { Button } from "reactstrap";
import style from "../Mycss.module.css";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

import React, { useState } from "react";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap";

function MultiSelect() {
   const [options, setOption] = useState([""]);
   const addOption = () => {
      if (options.length < 4) setOption([...options, ""]);
   };
   const removeOption = (optionIndx) => {
      if (options.length > 1) {
         options.splice(optionIndx, 1);
         setOption([...options]);
      }
   };
   return (
      <div className={style.questionContainer}>
         <InputGroup>
            <InputGroupAddon addonType="prepend">
               <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Your Question" />
         </InputGroup>
         <p className={style.inputQuestion}>Questions</p>
         {options.map((option, optionIdx) => {
            return (
               <InputGroup className={style.inpGrp} key={optionIdx}>
                  <Input placeholder={`option ${optionIdx + 1}`} />
                  <InputGroupAddon addonType="append">
                     <Button
                        onClick={() => addOption()}
                        disabled={options.length == 4}
                     >
                        +
                     </Button>
                     <Button onClick={() => removeOption(optionIdx)}>-</Button>
                  </InputGroupAddon>
               </InputGroup>
            );
         })}
         {options.length == 4 ? (
            <>
               {" "}
               <Button className={style.surveymainbutton}>Add Question</Button>
               <Button className={style.surveymainbutton}>Publish</Button>
            </>
         ) : null}
      </div>
   );
}
export default MultiSelect;
