import { useState } from "react";
import MortgageContext from "../context/MortgageContext";
import PropTypes from "prop-types";


export const MortgageProvider = ({ children }) => {
  const [result, setResult] = useState({
    monthlyRepayment: 0,
    totalRepayment: 0,
  });

  const [isResultAvailable, setIsResultAvailable] = useState(false);

  const updateResult = (newResult) => {
    setResult(newResult);
    setIsResultAvailable(true);
  };

  const clearResult = () => {
    setResult({
      monthlyRepayment: 0,
      totalRepayment: 0,
    });
    setIsResultAvailable(false);
  };

  return (
    <MortgageContext.Provider
      value={{ result, isResultAvailable, updateResult, clearResult }}
    >
      {children}
    </MortgageContext.Provider>
  );
};

MortgageProvider.propTypes ={
  children: PropTypes.node.isRequired,
}