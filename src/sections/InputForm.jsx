import { useContext, useState } from "react";
import InputTag from "../components/Inputs.component";
import CalIcon from "../assets/images/icon-calculator.svg";
import MortgageContext from "../context/MortgageContext";

const InputForm = () => {

  const {updateResult,clearResult} = useContext(MortgageContext)

  const [formData, setFormData] = useState({
    mortgageAmt: "",
    interestRate: "",
    mortgageTerm: "",
    mortgageType: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    let formattedValue = value;
    
    if (id === "mortgageAmt") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        mortgageType: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: formattedValue,
      }));
    }
  };

  
  const validateForm = () => {
    const newErrors = {};
    const { mortgageAmt, interestRate, mortgageTerm, mortgageType } = formData;

    if (!mortgageAmt) newErrors.mortgageAmt = "This field is required";
    if (!interestRate) newErrors.interestRate = "This field is required";
    if (!mortgageTerm) newErrors.mortgageTerm = "This field is required";
    if (mortgageType !== 'repayment' && mortgageType !== 'interestOnly') {
      newErrors.mortgageType = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRepayments = () => {
    const { mortgageAmt, interestRate, mortgageTerm, mortgageType } = formData;
    const P = parseFloat(mortgageAmt.replace(/,/g, ''));
    const r = (parseFloat(interestRate) / 100) / 12;
    const n = parseFloat(mortgageTerm) * 12;

    let monthlyRepayment;

    if (mortgageType === 'repayment') {
      monthlyRepayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      monthlyRepayment = P * r;
    }

    const totalRepayment = monthlyRepayment * n;
    
    updateResult({
      monthlyRepayment,
      totalRepayment,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      calculateRepayments();
    }
  };

  const clearAll = () => {
    setFormData({
      mortgageAmt: "",
      interestRate: "",
      mortgageTerm: "",
      mortgageType: "",
    });
    setErrors({});
    clearResult();
  };

  return (
    <section className="w-full bg-white sm:rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none">
      <header className="flex justify-between max-sm:flex-col flex-row items-center max-sm:items-start max-sm:gap-1 px-8 py-4 max-lg:py-8 pb-2">
        <h1 className="font-plusJakarta font-bold text-lg text-slate-900">
          Mortgage Calculator
        </h1>
        <button
          onClick={clearAll}
          className="text-slate-700 font-plusJakarta underline text-sm"
        >
          Clear All
        </button>
      </header>
      <div className="px-8 pb-4 pt-2 font-plusJakarta">
        <form onSubmit={handleFormSubmit}>
          <InputTag
            label="Mortgage Amount"
            inputSymbol="£"
            id="mortgageAmt"
            type="text"
            value={formData.mortgageAmt}
            errorMssg={errors.mortgageAmt}
            onChange={handleInputChange}
          />
          <div className="flex justify-between max-sm:gap-1 gap-5 max-sm:flex-col">
            <InputTag
              label="Mortgage Term"
              inputSymbol="years"
              id="mortgageTerm"
              type="number"
              value={formData.mortgageTerm}
              errorMssg={errors.mortgageTerm}
              onChange={handleInputChange}
            />
            <InputTag
              label="Interest Rate"
              inputSymbol="%"
              id="interestRate"
              type="number"
              value={formData.interestRate}
              errorMssg={errors.interestRate}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <label className="cursor-pointer text-sm text-slate-700">
              Mortgage Type
            </label>

            {['repayment', 'interestOnly'].map((type) => (
              <div key={type} className="radio-btn-container">
                <input
                  id={type}
                  type="radio"
                  name="mortgageType"
                  value={type}
                  checked={formData.mortgageType === type}
                  onChange={handleInputChange}
                  className="custom-radio"
                />
                <label
                  htmlFor={type}
                  className="text-md w-full font-bold text-slate-900 ml-12"
                >
                  {type === 'repayment' ? 'Repayment' : 'Interest Only'}
                </label>
              </div>
            ))}
            <p className="text-red font-plusJakarta text-sm mt-[-2px] font-semibold">
              {errors.mortgageType}
            </p>
          </div>

          <div className="w-full flex max-lg:justify-start max-lg:items-center">
            <div className="w-[300px] border-2 my-6 h-full bg-lime py-3 px-6 rounded-full flex flex-wrap gap-4">
              <img
                src={CalIcon}
                width={24}
                height={24}
                alt="calculator icon"
                className="hide-on-small-screen"
              />
              <button
                type="submit"
                className="text-lg font-bold text-slate-900"
              >
                Calculate Repayments
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InputForm;