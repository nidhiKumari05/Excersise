import * as React from "react";
import { useEffect } from "react";
import Select from "react-select";

export default function Dropdown(props) {
  useEffect(() => {
    if (Object.keys(props).length !== 0) {
    }
  }, [props]);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none', 
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
    fontFamily:"VerizonNHGeTX-Bold",
    fontSize:"14px"
    
    }),
    singleValue: (provided) => ({
      ...provided,
    fontFamily:"VerizonNHGeTX-Bold",
    fontSize:"14px"
    }),
  };
  return (
    <React.Fragment>
      <Select
        className={props.customClassName}
        options={props.options}
        onChange={props.changeHandler}
        defaultValue={props.selectedDropdownValue}
        styles={customStyles}
        isSearchable={false}
      />
    </React.Fragment>
  );
}
