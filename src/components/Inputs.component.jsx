import { useState } from "react";
import PropTypes from "prop-types";

const InputTag = ({
  id,
  type,
  value,
  onChange,
  label,
  inputSymbol,
  errorMssg,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="cursor-pointer text-sm text-slate-700 mt-4" htmlFor={id}>
      {label}
      <div
        className={`cursor-pointer flex justify-start items-center w-full border border-slate-700 rounded-md h-12 mt-2 focus-within:ring-2 focus-within:ring-lime
    ${id === "mortgageAmt" ? "flex-row-reverse" : "flex-row"}`}
      >
        <input
          id={id}
          type={type}
          value={value}
          className="cursor-pointer w-full font-plusJakarta rounded-tr-md rounded-br  outline-none px-4 text-lg font-bold text-slate-900
        remove-default-appearance remove-autofill-bg
        "
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        />
        <span
          htmlFor={id}
          className={`px-4 flex h-full py-2 justify-center items-center font-bold  
          ${errorMssg ? "bg-red text-white" : "bg-slate-100"}
          }

        ${isFocused ? "bg-lime text-slate-900" : "bg-slate-100"}
        ${
          id === "mortgageAmt"
            ? "rounded-tl-md rounded-bl-md"
            : "rounded-tr-md rounded-br-md"
        } 
        
        `}
        >
          {inputSymbol}
        </span>
      </div>
      <p className=" text-red font-plusJakarta text-sm font-semibold mt-2">
        {errorMssg}
      </p>
    </label>
  );
};

InputTag.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputSymbol: PropTypes.string.isRequired,
  errorMssg: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputTag;
