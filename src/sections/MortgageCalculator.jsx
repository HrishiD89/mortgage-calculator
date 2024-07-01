import InputForm from "./InputForm.jsx"
import Result from "./Result.jsx"

const MortgageCalculator = () => {
  return (
    <main className="bg-slate-100 w-full h-screen flex justify-center md:items-center ">
      <div className="flex w-full max-w-4xl flex-row  max-lg:flex-col rounded-xl shadow-lg sm:mx-8 border-2 m-8">
        <InputForm/>
        <Result/>
      </div>
    </main>
  )
}

export default MortgageCalculator