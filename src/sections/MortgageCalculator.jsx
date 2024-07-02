import InputForm from "./InputForm.jsx"
import Result from "./Result.jsx"

const MortgageCalculator = () => {
  return (
    <main className="bg-slate-100 w-full h-screen flex justify-center md:items-center ">
      <div className="w-full flex  max-w-4xl flex-row  max-lg:flex-col rounded-3xl  shadow-lg max-md:mx-0 max-md:my-0  m-8 bg-white">
        <InputForm/>
        <Result/>
      </div>
    </main>
  )
}

export default MortgageCalculator