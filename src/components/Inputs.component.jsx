import { useState } from "react";
import PropTypes from 'prop-types';

const InputTag = ({ id, type, value, onChange ,label,inputSymbol}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    
    <label className="cursor-pointer text-sm text-slate-700 mt-2" htmlFor={id}>
    {label}
    <div className={`cursor-pointer flex justify-start items-center w-full border border-slate-700 rounded-md h-10 mt-2 focus-within:ring-2 focus-within:ring-lime
    ${
        id === 'mortgageAmt' ? 'flex-row-reverse' : 'flex-row'
     }`}
    >
      
      <input
        id={id}
        type={type}
        value={value}
        className="cursor-pointer w-full font-plusJakarta rounded-tr-md rounded-br outline-none px-4 text-lg font-bold text-slate-900
        
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
      />
      <span
        htmlFor={id}
        className={`px-4 flex h-full py-2 justify-center items-center font-bold  
        ${
          isFocused ? 'bg-lime text-slate-900' : 'bg-slate-100'
        }
        ${
        id === 'mortgageAmt' ? 'rounded-tl-md rounded-bl-md' : 'rounded-tr-md rounded-br-md'} 
        
        `}
      >
        {inputSymbol}
      </span>
    </div>
  </label>
  );
};

InputTag.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputSymbol: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputTag;