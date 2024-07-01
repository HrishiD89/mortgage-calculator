import { useState } from "react";
import InputTag from "../components/Inputs.component";

const InputForm = () => {
  const [mortgageAmt, setMortgageAmt] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [mortgageType, setMortgageType] = useState('repayment');

  // const [isFocused, setIsFocused] = useState(false);


  const handleMortgageAmountChange = (e)=>{
    const formattedValue = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setMortgageAmt(formattedValue);
  }

  const handleInterestRateChange = (e)=>{
     setInterestRate(e.target.value)
  }
  const handleMortgageTermChange = (e)=>{
    setMortgageTerm(e.target.value)
  }

  const handleMortgageTypeChange = (e)=>{{
    setMortgageType(e.target.value)
    console.log(e.target.value)
  }}


  const clearAll = ()=>{
    setMortgageAmt('')
    setInterestRate('')
    setMortgageTerm('')
    setMortgageType('repayment')
  }

  return (
    <section className="w-full bg-white rounded-xl">
      <header className="flex justify-between items-center px-8 py-4">
        <h4 className="font-plusJakarta font-bold text-lg text-slate-900">Mortgage Calculator</h4>
        <a 
        onClick={clearAll} 
        href="#" 
        className="text-slate-700 font-plusJakarta underline text-sm">Clear All</a>
      </header>
      <div className="px-8 pb-4 pt-2 font-plusJakarta">
        <form action="/">
          <InputTag 
            label="Mortgage Amount"
            inputSymbol="£"
            id="mortgageAmt" 
            type="currency" 
            value={mortgageAmt}
            onChange={handleMortgageAmountChange}
          />
          <div className="flex justify-between gap-5">
            <InputTag 
              label="Mortgage Term"
              inputSymbol="years"
              id="mortgageTerm" 
              type="number" 
              value={mortgageTerm}
              onChange={handleMortgageTermChange}
            />
            <InputTag 
              label="Interest Rate"
              inputSymbol="%"
              id="interestRate" 
              type="number" 
              value={interestRate}
              onChange={handleInterestRateChange}
            />
          </div>
          
          <div>
            <label htmlFor="RepaymentType" className="cursor-pointer text-sm text-slate-700 mt-2">Repayment Type</label>

            <div className=" focus-within:bg-lightLime cursor-pointer flex justify-start items-center w-full border border-slate-700 rounded-md h-10 mt-2 focus-within:ring-2 focus-within:ring-lime">
              <input 
              id='RepaymentType' 
              type="radio" 
              name="RepaymentType" 
              value="repayment"
              checked={mortgageType === 'repayment'}
              onChange={handleMortgageTypeChange}
              className="mx-4 flex items-center h-full w-4 py-2"
              />
              <label 
              htmlFor="RepaymentType"
              className="text-md  w-full font-bold text-slate-900">Repayment</label>
            </div>

            <div className="focus-within:bg-lightLime  cursor-pointer flex justify-start items-center w-full border border-slate-700 rounded-md h-10 mt-2 focus-within:ring-2 focus-within:ring-lime">
              <input 
              id='InterestOnly' 
              type="radio" 
              name="InterestOnly" 
              value="interestOnly"
              checked={mortgageType === 'interestOnly'}
              onChange={handleMortgageTypeChange}
              className="mx-4 flex items-center h-full w-4 py-2 "
              />
              <label  
              htmlFor="InterestOnly"
              className=" w-full text-md font-bold text-slate-900">Interest Only</label>
            </div>
          </div>

          {/* button */}
          <div>
            <button type="submit">Calculate Repayments</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InputForm;
