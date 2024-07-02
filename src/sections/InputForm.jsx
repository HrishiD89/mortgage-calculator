import { useState } from "react";
import InputTag from "../components/Inputs.component";
import CalIcon from "../assets/images/icon-calculator.svg";

const InputForm = () => {
  const [mortgageAmt, setMortgageAmt] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [mortgageType, setMortgageType] = useState('');



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
    setMortgageType('')
  }

  return (
    <section className="w-full bg-white sm:rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none
    ">
      <header className="flex justify-between max-sm:flex-col flex-row items-center max-sm:items-start max-sm:gap-1 px-8 py-4 pb-2 ">
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
          <div className="flex justify-between max-sm:gap-1 gap-5 max-sm:flex-col">
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
          
          <div className="mt-4">
            <label htmlFor="RepaymentType" className="cursor-pointer text-sm text-slate-700  ">Mortgage Type</label>

            <div className="radio-btn-container">
                <input 
                id='RepaymentType' 
                type="radio" 
                name="RepaymentType" 
                value="repayment"
                checked={mortgageType === 'repayment'}
                onChange={handleMortgageTypeChange}
                className="custom-radio"
                />
                <label 
                htmlFor="RepaymentType"
                className="text-md  w-full font-bold text-slate-900 ml-12">Repayment</label>
            </div>

            <div className="radio-btn-container">
              
              <input 
              id='InterestOnly' 
              type="radio" 
              name="InterestOnly" 
              value="interestOnly"
              checked={mortgageType === 'interestOnly'}
              onChange={handleMortgageTypeChange}
              className="custom-radio"
              />
              <label  
              htmlFor="InterestOnly"
              className=" w-full text-md font-bold text-slate-900 ml-12">Interest Only</label>
            </div>
          </div>

          {/* button */}
          <div className="w-ful flex max-lg:justify-center max-lg:items-center">
          <div className="w-[300px] border-2 my-6 h-full bg-lime py-3 px-6 rounded-full flex flex-wrap gap-4">
            <img 
            src={CalIcon} 
            width={24} 
            height={24} 
            alt="calculator icon"
            className="hide-on-small-screen" />
            <button 
            type="submit"
            className="text-lg font-bold text-slate-900">Calculate Repayments</button>
          </div>
          </div>


        </form>
      </div>
    </section>
  );
}

export default InputForm;
