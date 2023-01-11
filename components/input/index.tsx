import React from 'react'
import { useState } from 'react';
import { useController } from "react-hook-form";
import Select from "react-select";

interface IRFields {
  label: string;
  error: any;
  name: string;
  defaultvalue: string | number;
  placeholder: string;
  control: any;
  rules: any;
  className?: string;
  disabled?: boolean;
  rows?: number;
  type?: "text" | "number" | "email" | "password";
}

interface IRSelectFields {
  label: string;
  name: string;
  control: any;
  isClearable?: boolean;
  error: any;
  defaultvalue: OptionTypes | null;
  placeholder: string;
  rules: any;
  options: OptionTypes[];
  onSelected?: (data: any) => void;
}


type OptionTypes = {
  _id?: string;
  image?: string;
  label: string;
  value: string;
};

/* Text input */
export const TextInput: React.FC<IRFields> = (props: IRFields): JSX.Element => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}
      <input
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={props.name} // send down the input name
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type || "text"}
        min={0}
        className={
          props.error
            ? `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border !border-danger ${props.className}`
            : `w-full text-sm bg-white disabled:bg-gray-300 rounded-none outline-none p-[18px] border disabled:border-gray-300 ${props.className}`
        }
      />
    </div>
  );
};


const customStyles = (error: boolean) => {
  const myStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: 58,
      fontSize: 14,
      color: "#000",
      background: "#fff",
      boxShadow: "none",
      "&:hover": { borderColor: "1px solid #fff" },
      border: error ? "1px solid red" : "1px solid #dfdfdf",
      borderRadius: 0,
    }),
  };
  return myStyles;
};

/* Single select field */
export const SingleSelect: React.FC<IRSelectFields> = (
  props: IRSelectFields
): JSX.Element => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  const handleSelect = (event: any) => {
    onChange(event);
    props.onSelected?.(event);
  };

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}

      <Select
        classNamePrefix={`custom-select`}
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={props.name} // send down the input name
        styles={customStyles(props.error)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={props.options}
        onChange={handleSelect}
        isClearable={props.isClearable}
        defaultValue={props.defaultvalue ? { ...props.defaultvalue } : null}
        placeholder={props.placeholder}
      />
    </div>
  );
};