import { useState } from "react";
import emptyResultlogo from "../assets/images/illustration-empty.svg";

const Result = () => {
  const [isResultAvailable, setIsResultAvailable] = useState(true);

  return (
    <section
      className={`w-full bg-slate-900 lg:rounded-tr-3xl 
     lg:rounded-bl-[18%] flex justify-center max-lg:py-10 max-lg:h-full max-sm:px-4 md:rounded-b-3xl 
     ${isResultAvailable ? "items-start" : "items-center "}
     `}
    >
      {isResultAvailable ? (
        <div className="flex flex-col m-8">
          <div>
            <h4 className="font-bold text-xl text-white font-plusJakarta ">
              Your results
            </h4>
            <p className=" text-slate-300 text-[15px] mb-8 mt-3">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              &quot;calculate repayments&quot; again.
            </p>
          </div>
          <div className="bg-lime rounded-md">
            <div className="w-full h-1"></div>
            <div className=" bg-slate-darkGreen rounded-md p-6 font-plusJakarta">
              <div>
                <div>
                  <p className=" text-slate-300 text-sm">
                    Your monthly repayment
                  </p>
                  <div className="pb-6 pt-4 border-b-[1px] border-[#2b414e] mb-6">
                    <h1 className="text-5xl font-bold text-lime">£1,797.74</h1>
                  </div>
                </div>
                <div>
                  <p className=" text-slate-300 text-sm">
                    Total you&apos;ll repay over the term
                  </p>
                  <h4 className=" font-bold text-xl text-white my-3">
                    $539,322.94
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col ">
          <img src={emptyResultlogo} alt="empty result logo" />
          <div className="flex flex-col justify-center items-center max-w-full lg:max-w-sm px-4">
            <h4 className="font-plusJakarta font-bold text-lg text-white w-full text-center">
              Result shown here
            </h4>
            <p className="text-sm w-full text-slate-300 text-center mt-4 max-lg:text-[18px] max-lg:leading-8 leading-6">
              Complete the form and click &quot;calculate repayments&quot; to
              see what your monthly repayment would be.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Result;
